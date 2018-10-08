// // Code your solution in this file!

const returnFirstTwoDrivers = function(array) {
  return array.slice(0,2)
}

const returnLastTwoDrivers = function(array) {
  return array.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(multiplier) {
  return function(value) {
    return multiplier * value
  }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function fetchSpecifiedDrivers(array, callback){
  return callback(array)
}

//   describe('createFareMultiplier()', function () {
//     it('returns a function', function () {
//       const fareMultiplier = createFareMultiplier(2);
//
//       expect(fareMultiplier).to.be.a('function');
//     });
//
//     it('should multiply a given value using the created multiplier', function () {
//       const fareQuintupler = createFareMultiplier(5);
//
//       expect(fareQuintupler(5)).to.eql(25);
//     });
//   });
//
//   describe('fareDoubler()', function () {
//     it('is a function', function () {
//       expect(fareDoubler).to.be.a('function');
//     });
//
//     it('doubles fares', function () {
//       expect(fareDoubler(10)).to.eql(20);
//     });
//   });
//
//   describe('fareTripler()', function () {
//     it('is a function', function () {
//       expect(fareTripler).to.be.a('function');
//     });
//
//     it('triples fares', function() {
//       expect(fareTripler(12)).to.eql(36);
//     });
//   });
//
//   describe('fetchSpecifiedDrivers(arrayOfDrivers, function)', function () {
//     it('returns the first two drivers when passed returnFirstTwoDrivers() as the second argument', function () {
//       expect(fetchSpecifiedDrivers(drivers, returnFirstTwoDrivers)).to.eql(['Sally', 'Bob']);
//     });
//
//     it('returns the last two drivers when passed returnLastTwoDrivers() as the second argument', function () {
//       expect(fetchSpecifiedDrivers(drivers, returnLastTwoDrivers)).to.eql(['Freddy', 'Claudia']);
//     });
//   });
// });
