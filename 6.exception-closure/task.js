const parseCount = (value) => {
  if (Number.isNaN(Number.parseFloat(value))) {
    throw new Error("Невалидное значение");
  }
  return Number.parseFloat(value);
}

const validateCount = (value) => {
  try {
    return parseCount(value);
  } catch (error) {
    return error;
  }
}

class Triangle {
  constructor(a, b, c) {
    if ((a + b < c) || (b + c < a) || (c + a < b)) {
      throw new Error("Треугольник с такими сторонами не существует");
    }
    this.a = a;
    this.b = b;
    this.c = c;
  };

  get perimeter() {
    return this.a + this.b + this.c;
  }

  get area() {
    return Number(Math.sqrt(this.perimeter/2 * (this.perimeter/2 - this.a) * (this.perimeter/2 - this.b) * (this.perimeter/2 - this.c)).toFixed(3));
  }
}

function getTriangle(a, b, c) {
  try{
    return new Triangle(a, b, c);
  } catch(err){
    return {
      get area() {
        return "Ошибка! Треугольник не существует";
      },
      get perimeter() {
        return "Ошибка! Треугольник не существует";
      }
    }
  }
}

new Triangle(1,3,3)