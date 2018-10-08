// Code your solution in this file!
const returnFirstTwoDrivers = function (array) {
  let newArray = [array[0], array[1]]
  return newArray
}

const returnLastTwoDrivers = function(array) {
  let newArray = [array[array.length - 2], array[array.length - 1]]
  return newArray
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function (num1) {
  return function (num2) {
    return num2 * num1;
  };
};

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function fetchSpecifiedDrivers(arrayOfDrivers, arg) {
  if (arg === returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(arrayOfDrivers)
  } else {
    return returnLastTwoDrivers(arrayOfDrivers)
  }
}
