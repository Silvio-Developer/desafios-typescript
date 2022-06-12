"use strict";
const funcionario = {
    codigo: 10,
    nome: 'Jhon'
};
function getFuncionario(funcionario) {
    return `\n[\n\tCódigo: ${funcionario.codigo}\n\tNome: ${funcionario.nome}\n]`;
}
console.log(`Desafio 1: ${getFuncionario(funcionario)}`);
