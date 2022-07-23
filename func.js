// Buscando os Temas
theme1 = document.getElementById("theme1")
theme2 = document.getElementById("theme2")
theme3 = document.getElementById("theme3")

// Buscando o Visor
visor = document.getElementById("answer")

// Buscando as Funcionalidades
del = document.getElementById("del")
reset = document.getElementById("reset")
adicao = document.getElementById("adicao")
subtracao = document.getElementById("subtracao")
multiplicacao = document.getElementById("multiplicacao")
divisao = document.getElementById("divisao")
reset  = document.getElementById("reset")
igual  = document.getElementById("igual")


// Buscando os Números
number1 = document.getElementById("number1")
number2 = document.getElementById("number2")
number3 = document.getElementById("number3")
number4 = document.getElementById("number4")
number5 = document.getElementById("number5")
number6 = document.getElementById("number6")
number7 = document.getElementById("number7")
number8 = document.getElementById("number8")
number9 = document.getElementById("number9")


// Fução para limpar o Visor
function limpar(){
    visor.innerHTML = "";
}
reset.addEventListener('click', limpar);

// Criando as Funções para escrever o número na tela
function escrever1(){
    visor.innerHTML += " 1 ";
}
number1.addEventListener('click', escrever1);

function escrever2(){
    visor.innerHTML += " 2 ";
}
number2.addEventListener('click', escrever2);

function escrever3(){
    visor.innerHTML += " 3 ";
}
number3.addEventListener('click', escrever3);

function escrever4(){
    visor.innerHTML += " 4 ";
}
number4.addEventListener('click', escrever4);

function escrever5(){
    visor.innerHTML += " 5 ";
}
number5.addEventListener('click', escrever5);

function escrever6(){
    visor.innerHTML += " 6 ";
}
number6.addEventListener('click', escrever6);

function escrever7(){
    visor.innerHTML += " 7 ";
}
number7.addEventListener('click', escrever7);

function escrever8(){
    visor.innerHTML += " 8 ";
}
number8.addEventListener('click', escrever8);

function escrever9(){
    visor.innerHTML += " 9 ";
}
number9.addEventListener('click', escrever9);


// Criando as Funções para escrever as funções na tela

function escreveradicao(){
    visor.innerHTML += " + ";
}
adicao.addEventListener('click', escreveradicao);

function escreversubtracao(){
    visor.innerHTML += " - ";
}
subtracao.addEventListener('click', escreversubtracao);

function escreverdivisao(){
    visor.innerHTML += " / ";
}
divisao.addEventListener('click', escreverdivisao);

function escrevermultiplicacao(){
    visor.innerHTML += " X ";
}
multiplicacao.addEventListener('click', escrevermultiplicacao);



igual.addEventListener('click', escrever);

function escrever(){
    visor.innerHTML = "77";
}

