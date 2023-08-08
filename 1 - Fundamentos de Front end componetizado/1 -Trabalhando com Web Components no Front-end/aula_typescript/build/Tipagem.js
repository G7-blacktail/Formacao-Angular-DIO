"use strict";
/**
 * Variaveis
 */
/*Tipos primitivos:
* boolean
* number
* string
*/
let ligado = false;
// por inferencia
let desligado = false; // desta maneira ele irá herdar o tipo
let nome = "Gustavo";
let idade = 30;
let altura = 1.9;
/* Tipos especiais
* null
* undefined
*/
let nulo = null;
let indefinido = undefined;
/**Tipos abrangentes
 * any
 * void
 */
let retorno;
function executaQuery() { }
let retornoView = "Qualquer coisa";
// Objeto sem previsibilidade
let produto = {
    name: "Gustavo",
    cidade: "DF",
    idade: 30
};
let meuProduto = {
    nome: "caneta",
    preco: 45.80,
    unidades: 50
};
/**
 * Arrays
 */
let dados = ["Gustavo", "Felipe", "Ana", "Adriana"];
let dados2 = ["Gustavo", "Felipe", "Ana", "Adriana"];
let infos = ["Gustavo", 28];
/**
 * Tuplas
 */
let boleto = ["Conta de Agua", 199.90, 258846];
/**
 * Arrays métodos
 */
dados.pop();
/**
 * Datas
 */
let aniversario = new Date("2023-7-28 16:56");
console.log(aniversario.toString());
