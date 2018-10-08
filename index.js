// Code your solution in this file!

const returnFirstTwoDrivers = function(array){
  return array.slice(0,2)
}

const returnLastTwoDrivers = function(array){
  return array.slice(-2)
}

const selectingDrivers = [returnFirstTwoDriver, returnLastTwoDrivers]

const createFareMultiplier = function(multiplier){
  return function(fare){
    return fare * multiplier
  }
}

const fareDoubler = function(fare){
  createFareMultiplier(2)
}


const fareTripler = function(fare){
  createFareMultiplier(3)
}


const fetchSpecifiedDrivers = function(array, fn){
  return fn(array)
}


    
