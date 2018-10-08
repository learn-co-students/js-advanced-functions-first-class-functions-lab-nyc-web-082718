// Code your solution in this file!
const returnFirstTwoDrivers = function (array) { return array.slice(0,2)}

const returnLastTwoDrivers = function(array){return array.slice(-2)}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(int){
  return function(fare) {return int * fare }
}

function fareDoubler(fare) {
  let doubleFare = createFareMultiplier(2)
    return doubleFare(fare)
}

function fareTripler(fare) {
  let tripleFare = createFareMultiplier(3)
    return tripleFare(fare)
}

function fetchSpecifiedDrivers(drivers, fun){
  return fun(drivers)
}
