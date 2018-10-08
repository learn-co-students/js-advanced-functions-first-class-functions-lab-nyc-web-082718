const returnFirstTwoDrivers = function(array) {
  return array.slice(0,2);
}

const returnLastTwoDrivers = function(array) {
  return array.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(num) {
  return function(fare) {
    return fare * num;
  }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

const fetchSpecifiedDrivers = function(drivers, fn) {
  return fn(drivers);
}
