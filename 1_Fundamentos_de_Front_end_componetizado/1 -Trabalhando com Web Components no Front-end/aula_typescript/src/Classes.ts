// Classe
// class Character {
//     name?: string
//     stregth: number
//     skill: number

//     constructor( stregth: number, skill: number){

//         this.stregth = stregth;
//         this.skill = skill;
//     }

//     attack() : void{
//         console.log(`Ataque com ${this.stregth} pontos`);
//     }
// }

// const p1 = new Character(10, 98);
// p1.attack();

// Modificadores de acesso
/**
 * Data Modifiers
 * 
 *     public
 *     private
 *     protected
 */

class Character {
        protected name?: string
        readonly stregth: number
        skill: number
    
        constructor(name: string, stregth: number, skill: number){
            this.name = name;
            this.stregth = stregth;
            this.skill = skill;
        }
    
        attack() : void{
            console.log(`Ataque com ${this.stregth} pontos`);
        }
    }


    // Character: superclass
    // Magician: subclass
    class Magician extends Character{
        magicPoins : number;
        constructor(name: string, 
                    stregth: number, 
                    skill: number, 
                    magicPoins: number){
                        super(name, stregth, skill)
                        this.magicPoins = magicPoins;
        }
    }
    
    const p1 = new Character("Ryu", 10, 98);
    p1.attack();

    const p2 = new Magician("Mago", 9, 30, 100);
    console.log(p2);