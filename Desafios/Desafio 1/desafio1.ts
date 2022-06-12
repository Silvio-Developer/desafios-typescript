interface IFuncionario {
    codigo: number,
    nome: string
}

const funcionario: IFuncionario = {
    codigo: 10,
    nome: 'Jhon'
}

function getFuncionario(funcionario: IFuncionario) {
    return `\n[\n\tCódigo: ${funcionario.codigo}\n\tNome: ${funcionario.nome}\n]`;
}

console.log(`Desafio 1: ${getFuncionario(funcionario)}`);