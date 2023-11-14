// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = n1 + n2 + n3 + n4 == 50;
console.log(isSum50);

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;
// let abc = n4 % 2;
// console.log(abc);
console.log(isTwoOdd);

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;
console.log(isOver25);

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique =
  n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;
console.log(isUnique);

// Here, we put the results into a single variable
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis =
  n1 + n2 + n3 + n4 == 50 &&
  (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2 &&
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) &&
  n1 != n2 &&
  n1 != n3 &&
  n1 != n4 &&
  n2 != n3 &&
  n2 != n4 &&
  n3 != n4;

console.log("===== Math Problems =====");

//   SOLUTION

// Check if all numbers are divisible by 5. Cache the result in a variable.

let isDivisible = n1 % 5 === 0 && n2 % 5 === 0 && n3 % 5 === 0 && n4 % 5 === 0;
console2.log(`The statement is ${isDivisible}.`);

console.log("==========");
// Check if the first number is larger than the last. Cache the result in a variable.

let largestNumber = n1 > n4;
console.log(`The statement is ${largestNumber}.`);

console.log("==========");
// Accomplish the following arithmetic chain:
// Subtract the first number from the second number.
// Multiply the result by the third number.
// Find the remainder of dividing the result by the fourth number.

let result = n1 - n4;
console.log(result);

result *= n3;
console.log(result);

result %= n4;
console.log(result);

console.log("==========");

// Change the way that isOver25 calculates so that we do not need to use the NOT operator (!) in other logic comparisons. Rename the variable as appropriate.
let isOver25True = n1 < 25 && n2 < 25 && n3 < 25 && n4 < 25;
console.log(isOver25True);

console.log("===== Practical Math =====");

const distance = 1500;
const budget = 175;
const cost = 3;

console.log("==== At 55 miles per hour, you get 30 miles per gallon ====");

// How many gallons of fuel will you need for the entire trip?
let milesPerGallon = 30;
let gallonsPerTrip = distance / milesPerGallon;
console.log(`I will need ${gallonsPerTrip} gallons of fuel.`);

// Will your budget be enough to cover the fuel expense?
let costForFuel = cost * gallonsPerTrip;
console.log(
  `The budget will be enough because the cost for fuel is ${costForFuel}.`
);

// How long will the trip take, in hours?
let milesPerHour = 55;
let hoursPerTrip = distance / milesPerHour;
hoursPerTrip = Math.floor(hoursPerTrip);
console.log(`The trip will take approximately ${hoursPerTrip} hours.`);

console.log("==== At 60 miles per hour, you get 28 miles per gallon. ====");

// How many gallons of fuel will you need for the entire trip?
let milesPerGallonTwo = 28;
let gallonsPerTripTwo = distance / milesPerGallonTwo;
console.log(`I will need ${gallonsPerTripTwo} gallons of fuel.`);

// Will your budget be enough to cover the fuel expense?
let costForFuelTwo = cost * gallonsPerTripTwo;
console.log(
  `The budget will be enough because the cost for fuel is ${costForFuelTwo}.`
);

// How long will the trip take, in hours?
let milesPerHourTwo = 60;
let hoursPerTripTwo = distance / milesPerHourTwo;
hoursPerTripTwo = Math.floor(hoursPerTripTwo);
console.log(`The trip will take approximately ${hoursPerTripTwo} hours.`);

console.log("==== At 75 miles per hour, you get 23 miles per gallon. ====");

// How many gallons of fuel will you need for the entire trip?
let milesPerGallonThree = 23;
let gallonsPerTripThree = distance / milesPerGallonThree;
console.log(`I will need ${gallonsPerTripThree} gallons of fuel.`);

// Will your budget be enough to cover the fuel expense?
let costForFuelThree = cost * gallonsPerTripThree;
console.log(
  `The budget will not be enough because the cost for fuel is ${costForFuelThree}.`
);

// How long will the trip take, in hours?
let milesPerHourThree = 75;
let hoursPerTripThree = distance / milesPerHourThree;
hoursPerTripThree = Math.floor(hoursPerTripThree);
console.log(`The trip will take approximately ${hoursPerTripThree} hours.`);

const bestOption =
  "I think the second option makes the most sense for the trip.";
console.log(bestOption);
