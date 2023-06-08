class Person {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  get name() {
    return `${this.firstname} ${this.lastname}`;
  }

  //// still not wokring / don't know how to use properly
  //   set name(fullname) {
  //     const [first, last] = fullname.split(",");
  //     this.firstname = first;
  //     this.lastname = last;
  //   }
}

const rui = new Person("RuiSilva");

console.log(rui.name);
