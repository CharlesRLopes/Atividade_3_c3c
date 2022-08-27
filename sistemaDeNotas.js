/* Questão 03 - Sistema de Notas
Construa um código JS que receba uma valor através de um input para um sistema de notas de uma 
instituição que possui a seguinte política de classificação: 
* Todo aluno recebe uma nota de 0 a 100. 
* Alunos com nota abaixo de 40 são reprovados. 
* As notas possuem a seguinte regra de arredondamento: 
	* Se a diferença entre a nota e o próximo múltiplo de 5 for menor que 3, 
    arredondar a nota para esse próximo múltiplo de 5. 
	* Se a nota for abaixo de 38, não é feito nenhum arredondamento pois esta nota resulta na reprovação do aluno. 
Por exemplo, a nota 84 será arredondada para 85, mas a nota 29 não será arredondada por ser abaixo de 40 
e não ser possível arredondamento eficiente, ou seja, que evite a reprovação do aluno. 
No caso de a nota ser 38, o arredondamento é possível pois atingirá 40 e o aluno será aprovado. */

// Selecionado os elementos da tela.
const nota = document.querySelector("#nota");
const res = document.querySelector("#resultado");
const botao = document.querySelector("#calcular");
const aviso = document.querySelector("#aviso");

const resultado = (valor) => {
    valor = Number.parseFloat(valor);
    if (valor >= 0 && valor <= 100){
        if (valor % 5 >= 3 && valor >= 38){
            valor += 5 - valor % 5 
        }
        if (valor >= 40){
            aviso.innerText = "Aprovado"
            return valor
        }
        else{
            aviso.innerText = "Reprovado"
            return valor
        }
    }
}
botao.onclick = () => {
    if (nota.value == "" || nota.value < 0 || nota.value > 100){
        aviso.innerText = "Necessário Campo de Nota com Valor entre 0 e 100";
        res.value = "";
    }
    else{
        res.value = resultado(nota.value);
    }
}