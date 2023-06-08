class Animal {
  sayHello() {
    return `${this.constructor.greeting}! I'm ${this.name}!`;
  }
}

class Cat extends Animal {
  constructor(name) {
    super();
    this.name = name;
  }
  static greeting = "Miauuu";
}

class Dog extends Animal {
  constructor(name) {
    super();
    this.name = name;
  }
  static greeting = "AuAu";
}

const jigui = new Cat("jigui", "miauuu");
console.log(jigui.sayHello());
