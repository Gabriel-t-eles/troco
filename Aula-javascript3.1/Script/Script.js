let num1 = document.querySelector("#valor_Pago");
let num2 = document.querySelector("#a_Receber");
let Botao = document.querySelector("#botao");
let soma = document.querySelector("#resultado");

function alterarTexto(){
    let a = Number(num1.value);
    let b = Number(num2.value);
    soma.innerHTML = a - b;
}

Botao.onclick = function(){
    alterarTexto();
}




