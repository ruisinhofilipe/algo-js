class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.sayHello = () => {
      return `Hello, ${this.firstName} ${this.lastName}`;
    };
  }
}

const rui = new Person("Rui", "Silva");
console.log(rui.sayHello());
