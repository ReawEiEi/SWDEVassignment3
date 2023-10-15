const nodemailer = require("nodemailer");
const Hospital = require("../models/Hospital");
exports.sendMail = async (user, booking) => {
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: process.env.AUTH_EMAIL,
      pass: process.env.AUTH_PASS,
    },
    secure: true, // upgrades later with STARTTLS -- change this based on the PORT
  });
  const bookingDate = new Date(booking.bookingDate);
  const hospital = await Hospital.findById(booking.hospital);
  const mailData = {
    from: process.env.AUTH_EMAIL,
    to: user.email,
    subject: `Your Booking Confirmation - ${booking._id.toString()}`,
    text: `Dear ${user.name},

 Thank you for choosing our Vaccine Booking service. We are pleased to confirm your booking for the following details:
     Booking ID: ${booking._id.toString()}
     Hospital: ${hospital.name}
     Hospital Address: ${hospital.address}, ${hospital.district}, ${hospital.province}, ${
      hospital.region
    }, ${hospital.tel}
     Booking Date: ${bookingDate.toLocaleDateString("en-GB")}

 We kindly ask that you review the details above to ensure that everything is accurate. If you notice any discrepancies, please do not hesitate to contact us at ${
   process.env.AUTH_EMAIL
 }.

 Sincerely,
 HoteQ`,
  };

  transporter.sendMail(mailData, (error, info) => {
    if (error) {
      return console.log(error);
    }
  });
};
