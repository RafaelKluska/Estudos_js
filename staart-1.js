console.log("Seja bem vindo!");
//comentário
/* 
inteiros
1;3;5..

Reais
2.3565 2345.234

nomes
"testos string" ou 'isndo outro texto'

Lógicos
*/
let nome = "Rafael";
let datadenascimento = 1989;
let data = new Date();
const anoatual = data.getFullYear();
//let anoatual_manipulavel = anoatual+1;
const idade = anoatual - datadenascimento;
//let nova_idade=idade+1;
console.log(nome+" você tem "+idade+" está velho kkkk" );
console.log(typeof idade);
console.log(typeof name);

console.log(nome+" no ano que vem, "+(anoatual+1) +", você terá "+ (idade+1));

/* comparadores
== (compara apenas valores das varia áveis)
=== estritamente igual (alem dos valores compara os tipos das variáveis typeof)
!=
<
>
<=
>=
*/

const blue = 'color: blue;';
const red = 'color: red;';
const yellow = 'color: yellow;';
const orange = 'color: orange;';
const green = 'color: green;';

const nome_no_cartao = "leticia";
const nome_no_site = "Marcos";
const validador = nome_no_cartao == nome_no_site;
console.log("Prova real para o validador -> " + validador);
if(nome_no_cartao == nome_no_site){
  console.log('%c Resultados iguais', blue);
} else {
  console.log("%c Resultados Diferentes", red );
}

//novo execício

let mes_atual = data.getMonth();
mes_atual = '4';

if(mes_atual == "1"){
  console.log("%c Mês de Janeiro", blue);
} else if(mes_atual == "2"){
  console.log("%c Mês de Fevereiro", blue);
} else if(mes_atual == "3"){
  console.log("%c Mês de Março", blue);
} else {
  console.log("%c Mês está entre -> abril e dezembro <- ", red);
}


// Attenção o switch é um condicional EXTRITO
switch (mes_atual) {
  case '1':
    console.log("%c Mês de Janeiro2", blue);
    break;
  case '2':
    console.log("%c Mês de fevereiro2", blue);
    break;
  case '3':
    console.log("%c Mês de março2", blue);
    break;
  case '4':
    console.log("%c Mês de abril2", blue);
    break;
    
  default:
    console.log("%c Mês está entre -> maio e dezembro <- ", red);
}

//Execício
//Usuário informa o valor da avaliação:
const avaliacao_user = 0;

/*Condições:
avaliação <= 2 "Avaliação ruin";
Avaliação < 4 "Avaliação média";
Avaliação >= 4 && <5 "Avaliação boa";
Avaliação == 5 "Avaliação excelente";
*/

if((avaliacao_user <= 2) && (avaliacao_user >= 0)){
  console.log("%c Avaliação ruin",red);
} else if (avaliacao_user < 4){
  console.log("%c Avaliação media",orange);
} else if ((avaliacao_user >= 4) && (avaliacao_user < 5)){
  console.log("%c Avaliação boa", blue);
} else if (avaliacao_user == 5 ){
  console.log("%c Avaliação excelente", green);
} else {
  console.log("%c O valor informado não corresponde a uma avaliação válida", yellow);
}

//Loops ou laços de repetição

console.log("// Estudos sobre loops");

console.log("1- For");
for (let f=0; f<=10; f++){
  console.log(f);
}

console.log("2- while");
let w = 0;
while (w<=10){
  console.log(w);
  w++;
}

console.log("3- Do while");
let d = 0;
do {
  console.log(d);
  d++;
} while (d<=10);

