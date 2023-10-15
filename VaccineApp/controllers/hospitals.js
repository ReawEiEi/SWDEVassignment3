const Hospital = require("../models/Hospital");

//@desc     Get all hospitals
//@route    GET /api/v1/hospitals
//@access   Public
exports.getHospitals = async (req, res, next) => {
  const reqQuery = { ...req.query };
  const removeFields = ["select", "sort", "page", "limit"];
  removeFields.forEach((param) => delete reqQuery[param]);
  let queryStr = JSON.stringify(reqQuery).replace(
    /\b(gt|gte|lt|lte|in)\b/g,
    (match) => `$${match}`
  );
  // Finding resource
  let query = Hospital.find(JSON.parse(queryStr));
  // Select
  if (req.query.select) {
    query = query.select(req.query.select.split(",").join(" "));
  }
  // Sort
  query = req.query.sort
    ? query.sort(req.query.sort.split(",").join(" "))
    : query.sort("-createdAt");
  // Pagination
  const page = parseInt(req.query.page, 10) || 1;
  const limit = parseInt(req.query.limit, 10) || 25;
  const startIdx = (page - 1) * limit;
  const endIdx = page * limit;
  const total = await Hospital.countDocuments();
  query = query.skip(startIdx).limit(limit);
  try {
    // Executing query
    const hospitals = await query;
    // Pagination result
    const pagination = {};
    if (endIdx < total) {
      pagination.next = { page: page + 1, limit };
    }
    if (startIdx > 0) {
      pagination.prev = { page: page - 1, limit };
    }
    res.status(200).json({
      success: true,
      count: hospitals.length,
      pagination,
      data: hospitals,
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

//@desc     Get single hospital
//@route    GET /api/v1/hospitals/:id
//@access   Public
exports.getHospital = async (req, res, next) => {
  try {
    const hospital = await Hospital.findById(req.params.id);
    if (!hospital) {
      res.status(400).json({ success: false });
    }
    res.status(200).json({ success: true, data: hospital });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

//@desc     Create single hospital
//@route    POST /api/v1/hospitals
//@access   Private
exports.createHospital = async (req, res, next) => {
  console.log(req.body);
  try {
    const hospital = await Hospital.create(req.body);
    res.status(201).json({ success: true, data: hospital });
  } catch (err) {
    res.status(400).json({ success: false, message: err });
  }
};

//@desc     Update single hospital
//@route    PUT /api/v1/hospitals/:id
//@access   Private
exports.updateHospital = async (req, res, next) => {
  try {
    const hospital = await Hospital.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!hospital) {
      res.status(400).json({ success: false });
    }
    res.status(200).json({ success: true, data: hospital });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

//@desc     Delete single hospital
//@route    DELETE /api/v1/hospitals/:id
//@access   Private
exports.deleteHospital = async (req, res, next) => {
  try {
    const hospital = await Hospital.findById(req.params.id);
    if (!hospital) {
      res.status(400).json({ success: false });
    }
    hospital.remove();
    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};
