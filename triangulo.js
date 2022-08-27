/* Questão 01 - Tipos de Triângulo
Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados: 

Equilátero: Os três lados são iguais.
Isósceles: Dois lados iguais.
Escaleno: Todos os lados são diferentes.

Crie um código JS que receba os comprimentos dos lados de um triângulo através de inputs e retorne sua classificação 
quanto ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um triângulo) */


const equilatero = "Equilátero: Os três lados são iguais.";
const isosceles =  "Isósceles: Dois lados iguais.";
const escaleno = "Escaleno: Todos os lados são diferentes."; 

// Selecionado os elementos da tela.
const lado1 = document.querySelector("#lado1");
const lado2 = document.querySelector("#lado2");
const lado3 = document.querySelector("#lado3");
const res = document.querySelector("#resultado");
const botao = document.querySelector("#consultar");
const aviso = document.querySelector("#aviso");


const triangulo = (valor1, valor2, valor3) => {
    valor1 = Number.parseFloat(valor1);
    valor2 = Number.parseFloat(valor2);
    valor3 = Number.parseFloat(valor3);

    if (valor1 == valor2 && valor3 == valor1){
        res.value = "Equilátero";
        return  equilatero;
    }
    if(valor1 != valor2 && valor1 != valor3 && valor2 != valor3){
        res.value = "Escaleno";
        return escaleno;
    }
    else {
        res.value = "Isósceles";
        return isosceles;
    }
}

botao.onclick = () => {
    if (lado1.value == "" || lado2.value == "" || lado3.value ==""){
        aviso.innerText = "Necessário preencher todos os lados!";
        res.value = "";
    }
    else if (lado1.value <= "0" || lado2.value <= "0" || lado3.value <="0"){
        aviso.innerText = "Necessário preencher todos os lados com valores possítivos!";
        res.value = "";
    }
    else{
        aviso.innerText = triangulo(lado1.value, lado2.value, lado3.value);
    }
}