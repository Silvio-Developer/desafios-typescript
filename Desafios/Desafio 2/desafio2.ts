enum Profissao{
    Atriz,
    Padeiro,   
}

interface IPessoa{
    nome: string,
    idade: number,
    profissao: Profissao
}

const pessoa1: IPessoa ={
    nome: 'Maria',
    idade: 29,
    profissao: Profissao.Atriz
}

const pessoa2: IPessoa ={
    nome: 'Roberto',
    idade: 19,
    profissao: Profissao.Padeiro
}

const pessoa3: IPessoa ={
    nome: 'Laura',
    idade: 32,
    profissao: Profissao.Atriz
}

const pessoa4: IPessoa ={
    nome: 'Carlos',
    idade: 19,
    profissao: Profissao.Padeiro
}

function getPessoa(pessoa: IPessoa){
    return `\n[\n\tNome: ${pessoa.nome}\n\tIdade: ${pessoa.idade}\n\tProfissão: ${pessoa.profissao}\n]`;
}
console.log(`Desafio 2: ${getPessoa(pessoa1)} ${getPessoa(pessoa2)}
                        ${getPessoa(pessoa3)} ${getPessoa(pessoa4)}`);