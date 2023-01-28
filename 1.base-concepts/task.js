"use strict"
function solveEquation(a, b, c) {
  let arr = [];

  const discriminant = b ** 2 - 4 * a * c;

  if(discriminant === 0) {
    const root = -b / (2 * a);
    arr = [root];
  }

  if(discriminant > 0) {
    const root1 = (-b + Math.sqrt(discriminant) )/(2*a);
    const root2 = (-b - Math.sqrt(discriminant) )/(2*a);
    arr = [root1, root2];
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  
}