//Function that returns the time 
exports.dateAndTime = function () {
  return Date();
}

exports.isItYourBirthday = function () {
  //Sets current date to varable
  currentMonth = new Date.getDate();
  currentDay = new Date.getDay();

  //Makes birthday varable
  birthdayMonth = 4;
  birthdayDay = 17;

  //Checks if birthday is the same as formatDate
  if (birthdayMonth == currentMonth && birthdayDay == currentDay) {
    return true; 
  } else {
    return false; 
  }
  
}

//Function that uses dateAndTime() function to check 
//the var birthday is equal to the output if Date()