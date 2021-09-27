class Employee {
  #color;
  #name;
  age;
  constructor(name, age, color) {
    this.name = name;
    this.age = age;
    this.color = color;
  }
  draw = () => {
    console.log("blue");
  };
}

module.exports = Employee;
