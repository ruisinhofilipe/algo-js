class Person {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  get name() {
    return `${this.firstname} ${this.lastname}`;
  }

  set name(fullname) {
    const [first, last] = fullname.split(" ");
    this.firstname = first;
    this.lastname = last;
  }
}

const rui = new Person("Rui", "Silva");

console.log(rui.name);
