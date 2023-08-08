// Decorators
// function ExibirNome(target: any){
//     console.log(target);
// }


// @ExibirNome
// class Funcionario {}

// function apiVersion(version: string){
//     return (target: any) => {
//         Object.assign(target.prototype, {__version: version})
//     }
// }



// @apiVersion("1.10")
// class Api {}

// const api = new Api();
// console.log(api.__version);

// Decorator attribute
function apiVersion(version: string){
    return (target: any) => {
        Object.assign(target.prototype, {__version: version})
    }
}

function minLength(length: number){
    return (target: any, key: string) => {
        let _value = target[key];

        const getter = () => "[Play]:" + _value;
        const setter = (value: string) => {
            if(value.length < length) {
                throw new Error(`tamanho menor que ${length}`);
            }else{
                _value = value;
            }
        };

        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
        });
    };
}

@apiVersion("1.10")
class Api {
    @minLength(3)
    name:string    

    constructor(name:string){
        this.name = name;
    }
}

const api = new Api("Us");
console.log(api.name);