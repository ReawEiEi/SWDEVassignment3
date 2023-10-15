const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
  bookingDate: {
    type: Date,
    required: true,
  },
  bookingSession: {
    type: String,
    enum: ["morning", "afternoon"],
    default: "morning",
  },
  vaccine: {
    type: String,
    enum: ["covid19", "influenza"],
    default: "covid19",
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  hospital: {
    type: mongoose.Schema.ObjectId,
    ref: "Hospital",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Booking", BookingSchema);
