function getArrayParams(...arr) {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const sum = arr.reduce((a, b) => a + b);
  const avg = Number((sum / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  return arr.length ? arr.reduce((a, b) => a + b) : 0;
}

function differenceMaxMinWorker(...arr) {
  const max = Math.max(...arr);
  const min = Math.min(...arr);

  return arr.length ? max - min : 0;
}

function differenceEvenOddWorker(...arr) {

  const sumEvenElement = arr.reduce((a, b) => {
    if (b % 2 === 0) {
      return a + b
    }

    return a;
  }, 0)
  const sumOddElement = arr.reduce((a, b) => {
    if (b % 2 !== 0) {
      return a + b
    }

    return a;
  }, 0)

  return arr.length ? sumEvenElement - sumOddElement : 0;
}

function averageEvenElementsWorker(...arr) {
  const result = arr.reduce((a, b) => {
    if (b % 2 === 0) {
      a.sum += b;
      a.count++;
    }

    return a;
  }, {sum: 0, count: 0})

  return arr.length ? result.sum / result.count : 0;
}

function makeWork (arrOfArr, func) {
  const funcCallResults = [];
  for (let arr of arrOfArr) {
    funcCallResults.push(func(...arr));
  }

  return Math.max(...funcCallResults);
}
