let n1 = 23;
let n2 = 20;
let n3 = 4;
let n4 = 3;

let isSum50 = (n1 + n2 + n3 + n4) == 50
let isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;
let isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;
let isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;
let isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;
console.log(isValid);
if (n1 % 5 === 0 && n4 % 5 === 0)
   {console.log ("yessss!")}
 else 
   {console.log ("waaa!")}
if (n2 % 5 === 0 || n3 % 5 === 0)
   {console.log ("omgg!")}
 else
    {console.log ("boo!")} 
if (n1 > n4)
   {console.log ("woohoo!")}
 else
  {console.log (":/")}  
let value = (((n1 - n2) * n3) % n4)
console.log(value)
//total distance 
const distance = 1500;
//miles per gallon at certain speeds
const mph55 = 30;
const mph60 = 28;
const mph75 = 23;
//miles driven per hour
const firstTripmiles = 55;
const secondTripmiles = 60;
const thirdTripmiles = 75;
//budgeting
const budget = 175;
//cost of fuel
const fuelCost = 3;
//amount of fuel used at certain speed
const firstSpeed = (distance / mph55);
const secondSpeed = (distance / mph60);
const thirdSpeed = (distance / mph75);
//will money be enough to travel at this speed?
const firstTrip = (firstSpeed * fuelCost <= budget)
const secondTrip = (secondSpeed * fuelCost <= budget)
const thirdTrip = (thirdSpeed * fuelCost <= budget)
//how long will the trip take in hours time 
const firstTripHours = (distance / firstTripmiles)
const secondTripHours = (distance / secondTripmiles)
const thirdTripHours = (distance / thirdTripmiles)
console.log(
    `It will take ${firstSpeed} gallons of fuel going at 55 mph.
    It will take ${secondSpeed} gallons of fuel going at 60 mph.
    It will take ${thirdSpeed} gallons of fuel going at 75 mph.`
)
console.log(
    `first trip budget is: ${firstTrip}
    second trip budget is: ${secondTrip}
    third trip budget is: ${thirdTrip}`
)
console.log(
    `The first trip would be ${firstTripHours} hours.
    The second trip would be ${secondTripHours} hours.
    The third trip would be ${thirdTripHours} hours.`
)