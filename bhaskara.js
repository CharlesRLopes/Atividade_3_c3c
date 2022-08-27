/*Questão 02 - Bhaskara
Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto, 
elabore um método em JS cujo objetivo é resolver a fórmula de Bhaskara. 
Para isso, sua função deve receber três parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 
os valores seriam respectivamente: 3, -5, 12. 
Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, 
mesmo que os resultados sejam iguais.
Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase: “Delta é negativo”. */

const valor_a = document.querySelector("#valor_a");
const valor_b = document.querySelector("#valor_b");
const valor_c = document.querySelector("#valor_c");
const res = document.querySelector("#resultado");
const botao = document.querySelector("#calcular");
const aviso = document.querySelector("#aviso");

const delta = (a, b, c)=>{
    a = Number.parseFloat(a);
    b = Number.parseFloat(b);
    c = Number.parseFloat(c);

    return b * b -4 * a * c;
}   

const bhaskara = (a, b, c) =>{
    x = []
    d = delta (a, b, c);
    if(d < 0){
        return "Delta é negativo";  
    } 
    else{
        x[0] = (-b + Math.sqrt(d)) / 2 * a;
        x[1] = (-b - Math.sqrt(d)) / 2 * a;
        return x;
    }
}

botao.onclick = () => {
    if (valor_a.value == "" || valor_b.value == "" || valor_c.value == ""){
        aviso.innerText = "Necessário inserir os valores de a, b, c. Caso não tenha digite 1"
    }
    else if (valor_a.value != 0){
        res.value= bhaskara(valor_a.value, valor_b.value, valor_c.value);
        aviso.innerText = ""
    }
    else{
        aviso.innerText = "Valor de 'a' deve ser diferente de 0"
        valor_a = ""
    }
}



