// Code your solution in this file!
const returnFirstTwoDrivers = (x) => x.slice(0,2);
const returnLastTwoDrivers = (x) => x.slice(x.length -2 )

const drivers = ['Antonia', 'Nuru', 'Amari', 'Claudia'];

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (x) => {
    return function(fare) { return x * fare }
};

const fareDoubler = createFareMultiplier(2);