function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

const john = new Student("John", "Male", 15);
const fabi = new Student("Fabi", "Female", 18);

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
  this?.marks ? this.marks = [...this.marks, ...marks] : false;
}

Student.prototype.getAverage = function () {
  return this?.marks ? this.marks.length ? (this.marks.reduce((sum, mark) => sum + mark) / this.marks.length) : 0 : 0;
}

Student.prototype.exclude = function (reason) {
  this?.marks ? delete this.marks : false;
  this?.subject ? delete this.subject : false;

  this.excluded = reason;
}