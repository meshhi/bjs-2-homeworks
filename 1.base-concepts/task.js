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
  if (Number.isNaN(Number(percent) + Number(contribution) + Number(amount) + Number(countMonths))) {
    return false;
  }

  const percentage = percent / 100 / 12;
  const creditAmount = amount - contribution;
  const monthPayment = creditAmount * (percentage + (percentage / (((1 + percentage) ** countMonths) - 1)));
  const resultPayment = monthPayment * countMonths;

  return Number(resultPayment.toFixed(2));
}