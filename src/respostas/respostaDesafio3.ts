let botaoAtualizarSaldo = document.getElementById('atualizar-saldo');
let botaoLimparSaldo = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma') as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo');

let saldoTotal:number = 0;

function somarAoSaldo(soma: number) {
    if(campoSaldo){
        saldoTotal += soma;
        campoSaldo.innerHTML = saldoTotal.toString();
    }
    
}

function limparSaldo() {
    saldoTotal = 0;
    if(campoSaldo){
        campoSaldo.innerHTML = '';
    }
    
}

if(botaoAtualizarSaldo){
    botaoAtualizarSaldo.addEventListener('click', function () {
        somarAoSaldo(Number(soma.value));
    });
}

if(botaoLimparSaldo){
    botaoLimparSaldo.addEventListener('click', function () {
        limparSaldo();
    });
}