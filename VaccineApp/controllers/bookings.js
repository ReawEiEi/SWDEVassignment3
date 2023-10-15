const Booking = require("../models/Booking");
const Hospital = require("../models/Hospital");
const User = require("../models/User");
const { validateBookingAfterToday } = require("../utils/date");
const { sendMail } = require("./mails");

//@desc     Get all bookings
//@route    GET /api/v1/bookings
//@access   Private
exports.getBookings = async (req, res, next) => {
  let query;
  let hospitalId = req.params.hospitalId;
  if (req.user.role !== "admin") {
    if (hospitalId) {
      query = Booking.find({
        user: req.user.id,
        hospital: hospitalId,
      }).populate({
        path: "hospital",
        select: "name address tel",
      });
    } else {
      query = Booking.find({
        user: req.user.id,
      }).populate({
        path: "hospital",
        select: "name address tel",
      });
    }
  } else {
    if (hospitalId) {
      query = Booking.find({ hospital: hospitalId }).populate({
        path: "hospital",
        select: "name address tel",
      });
    } else {
      query = Booking.find().populate({
        path: "hospital",
        select: "name address tel",
      });
    }
  }
  try {
    const bookings = await query;
    res.status(200).json({
      success: true,
      count: bookings.length,
      data: bookings,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "Cannot find Booking" });
  }
};

//@desc     Get single booking
//@route    GET /api/v1/booking/:id
//@access   Private
exports.getBooking = async (req, res, next) => {
  try {
    const booking = await Booking.findById(req.params.id).populate({
      path: "hospital",
      select: "name address tel",
    });
    if (!booking) {
      return res.status(404).json({
        success: false,
        message: `No booking with the id of ${req.params.id}`,
      });
    }
    res.status(200).json({ success: true, data: booking });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "Cannot find Booking" });
  }
};

//@desc     Add booking
//@route    POST /api/v1/hospitals/:hospitalId/bookings
//@access   Private
exports.addBooking = async (req, res, next) => {
  try {
    req.body.hospital = req.params.hospitalId;
    const hospital = await Hospital.findById(req.params.hospitalId);
    if (!hospital) {
      return res.status(404).json({
        success: false,
        message: `No hospital with the id of ${req.params.hospitalId}`,
      });
    }
    req.body.user = req.user.id;

    // only allow the registered user to book after today
    const bookingDate = new Date(req.body.bookingDate);
    const isValidDate = validateBookingAfterToday(bookingDate);
    if (!isValidDate.afterToday) {
      return res.status(400).json({
        success: false,
        message: `The booking date should be after today.`,
      });
    } else {
      const booking = await Booking.create(req.body);
      res.status(200).json({
        success: true,
        data: booking,
      });

      User.findById(req.user.id, function (err, user) {
        if (err) {
          console.log(err);
        } else {
          sendMail(user, booking);
        }
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Cannot create Booking",
    });
  }
};

//@desc     Update booking
//@route    PUT /api/v1/bookings/:id
//@access   Private
exports.updateBooking = async (req, res, next) => {
  try {
    let booking = await Booking.findById(req.params.id);
    if (!booking) {
      return res.status(404).json({
        success: false,
        message: `No booking with the id of ${req.params.id}`,
      });
    }
    if (booking.user.toString() !== req.user.id && req.user.role !== "admin") {
      return res.status(401).json({
        success: false,
        message: `User ${req.user.id} is not authorized to update this booking`,
      });
    }

    // check the booking date
    if (req.body.bookingDate) {
      const bookingDate = new Date(req.body.bookingDate);
      const isValidDate = validateBookingAfterToday(bookingDate);
      if (!isValidDate.afterToday) {
        return res.status(400).json({
          success: false,
          message: `Cannot change booking date to be before today.`,
        });
      }
    }
    booking = await Booking.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      success: true,
      data: booking,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Cannot update Booking",
    });
  }
};

//@desc     Delete booking
//@route    DELETE /api/v1/bookings/:id
//@access   Private
exports.deleteBooking = async (req, res, next) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking) {
      return res.status(404).json({
        success: false,
        message: `No booking with the id of ${req.params.id}`,
      });
    }
    if (booking.user.toString() !== req.user.id && req.user.role !== "admin") {
      return res.status(401).json({
        success: false,
        message: `User ${req.user.id} is not authorized to delete this booking`,
      });
    }
    await booking.remove();
    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Cannot delete Booking",
    });
  }
};
