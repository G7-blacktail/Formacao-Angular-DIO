// Interfaces (type x interface)
type robot = {
    readonly id: number | string;
    name: string;
};

interface robot2 {
    readonly id: number | string;
    name: string;
    sayHello(): string;
}

const bot: robot2 = {
    id: 1,
    name: "Jordan",
    sayHello: function (): string {
        throw new Error("Function not implemented.");
    }
};

const bot1: robot = {
    id: 1,
    name: "Jordan"
};

console.log(bot);
console.log(bot1);

class Pessoa implements robot2 {
    id: string | number;
    name: string;
    
    constructor(id: string | number, name: string){
    this.id = id
    this.name = name
    }
    sayHello(): string {
      //  return "Hello";
      return `hello i'm ${this.name}`;
    }
}

const p = new Pessoa(1, "gutmans")
console.log(p.sayHello())
