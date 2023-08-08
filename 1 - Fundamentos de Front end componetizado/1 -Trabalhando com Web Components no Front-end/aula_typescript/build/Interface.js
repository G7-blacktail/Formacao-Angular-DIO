"use strict";
const bot = {
    id: 1,
    name: "Jordan",
    sayHello: function () {
        throw new Error("Function not implemented.");
    }
};
const bot1 = {
    id: 1,
    name: "Jordan"
};
console.log(bot);
console.log(bot1);
class Pessoa {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    sayHello() {
        //  return "Hello";
        return `hello i'm ${this.name}`;
    }
}
const p = new Pessoa(1, "gutmans");
console.log(p.sayHello());
