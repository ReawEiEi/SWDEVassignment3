/**
* @swagger
* components:
*   schemas:
*     Hospital:
*       type: object
*       required:
*         - name
*         - address
*         - district
*         - province
*         - postalcode
*       properties:
*         name:
*           type: string
*           description: Name of the hospital
*         address:
*           type: string
*           description: House No., Street, Road
*         district:
*           type: string
*           description: District
*         province:
*           type: string
*           description: province
*         postalcode:
*           type: string
*           description: 5-digit postal code 
*         tel:
*           type: string
*           description: telephone number
*         picture:
*           type: string
*           description: hospital picture
*/

const express = require("express");
const {
  getHospitals,
  getHospital,
  createHospital,
  updateHospital,
  deleteHospital,
} = require("../controllers/hospitals");

/**
* @swagger
* tags:
*   name: Hospitals
*   description: The hospitals managing API
*/

// Include other resource routers
const bookingRouter = require("./bookings");
const router = express.Router();
const { protect, authorize } = require("../middleware/auth");

// Re-route into other resource routers

/**
* @swagger
* /hospitals:
*   post:
*     summary: Create a new hospital
*     security:
*       - bearerAuth: []
*     tags: [Hospitals]
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             $ref: '#/components/schemas/Hospital'
*     responses:
*       201:
*         description: The hospital was successfully created
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/Hospital'
*       500:
*         description: Some server error
*/

/**
* @swagger
* /hospitals:
*   get:
*     summary: Returns the list of all the hospitals
*     tags: [Hospitals]
*     responses:
*       200:
*         description: The list of the hospitals
*         content:
*           application/json:
*             schema:
*               type: array
*               items:
*               $ref: '#/components/schemas/Hospital'
*/
router.use("/:hospitalId/bookings", bookingRouter);
router.route("/").get(getHospitals).post(protect, authorize("admin"), createHospital);

/**
* @swagger
* /hospitals/{id}:
*   get:
*     summary: Get the hospital by id
*     tags: [Hospitals]
*     parameters:
*       - in: path
*         name: id
*         schema:
*           type: string
*         required: true
*         description: The hospital id
*     responses:
*       200:
*         description: The hospital description by id
*         contents:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/Hospital'
*       404:
*         description: The hospital was not found
*/
router
  .route("/:id")
  .get(getHospital)
  .put(protect, authorize("admin"), updateHospital)
  .delete(protect, authorize("admin"), deleteHospital);

module.exports = router;
