function addNumber(x: number, y: number): number {
    return x + y;
}

let soma: number = addNumber(4, 7);

console.log(soma);
// tipo de função implicito
function addHello(name: string){
    return `Hello ${name}`;
}
// tipo de função multi tipo
function CallToPhone(phone: number | string){
    return phone;
}

console.log(CallToPhone("11 58952 3256"));

// Funções assincronas

async function getDataBase(idade:number): Promise<String> {
    return "Gustavo";
}

console.log(getDataBase(2));