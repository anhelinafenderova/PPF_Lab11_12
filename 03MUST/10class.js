class User {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    return `${this.name} powiedz cześć`;
  }
}

class Employee extends User {
  constructor(name, salary) {
    super(name);
    this.salary = salary;
  }

  raiseSalary() {
    this.salary += 1000;
    return this.salary;
  }
}

let user = new User('Krzysiek');
console.log(user.sayHello());

let employee = new Employee('Jan', 2000);
console.log(employee);
employee.raiseSalary();
console.log(employee);
