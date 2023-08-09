// Generics
function concatArray<T>(...itens: T[]): T[]{
    return new Array().concat(...itens);
}

const numArray = concatArray<number[]>([1,5], [3]);
const stgArray = concatArray<string[]>(["Felipe", "goku"], ["vegeta"]);

stgArray.push(["saitama"]);

console.log(stgArray);
console.log(numArray);