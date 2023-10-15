const validateBookingAfterToday = (bookingDate) => {
  const checkList = { afterToday: false };
  var incomingMidnight = new Date();
  incomingMidnight.setHours(24,0,0,0); // midnight tonight
  if (bookingDate >= incomingMidnight) {
    checkList.afterToday = true;
  }
  return checkList;
};

module.exports = {
  validateBookingAfterToday,
};
