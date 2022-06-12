"use strict";
let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma');
let campoSaldo = document.getElementById('campo-saldo');
let saldoTotal = 0;
function formatarValor(valor) {
    return `Saldo atual: R$ ${valor.toFixed(2)}`;
}
function somarAoSaldo(soma) {
    if (campoSaldo) {
        saldoTotal += soma;
        campoSaldo.innerHTML = formatarValor(saldoTotal);
        limparCampoSoma();
    }
}
function limparCampoSoma() {
    if (soma) {
        soma.value = "";
    }
}
function limparSaldo() {
    if (campoSaldo) {
        saldoTotal = 0;
        campoSaldo.innerHTML = formatarValor(saldoTotal);
    }
}
botaoAtualizar === null || botaoAtualizar === void 0 ? void 0 : botaoAtualizar.addEventListener('click', () => {
    somarAoSaldo(Number(soma.value.replace(',', '.')));
});
botaoLimpar === null || botaoLimpar === void 0 ? void 0 : botaoLimpar.addEventListener('click', () => {
    limparSaldo();
});
/**
    <h4>Valor a ser adicionado: <input id="soma"> </h4>
    <button id="atualizar-saldo">Atualizar saldo</button>
    <button id="limpar-saldo">Limpar seu saldo</button>
    <h1>"Seu saldo é: " <span id="campo-saldo"></span></h1>
 */ 
