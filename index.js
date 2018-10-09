// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
  return drivers.slice(0,2)

}

const returnLastTwoDrivers = function(drivers){
  return drivers.slice(-2)
}

selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(num){
  return function(fare){
    return (num * fare)
  }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function fetchSpecifiedDrivers(arrayOfDrivers, driversFunction){
  if (driversFunction === returnFirstTwoDrivers){
    return returnFirstTwoDrivers(arrayOfDrivers)}
  else if (driversFunction === returnLastTwoDrivers) {
    return returnLastTwoDrivers(arrayOfDrivers)
  }
}
