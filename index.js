/*funções do botões LOGIN E CADASTRO*/
function logar() {
    window.location.href = 'login.html';
}

function cadastrar() {
    window.location.href = 'cadastro.html';
}


/*
Tabela de Preços de Frete (Exemplo)
Distância (km) | Peso da Carga (kg) | Preço de Frete ($)
-------------------------------------------
0-50           | 0-100               | 2.000
0-50           | 101-500             | 3.500
0-50           | 501-1000            | 5.000
51-100         | 0-100               | 3.000
51-100         | 101-500             | 5.000
51-100         | 501-1000            | 7.000
101-200        | 0-100               | 4.000
101-200        | 101-500             | 6.000
101-200        | 501-1000            | 8.000
*/


/*CODIGO DO CALCULO*/
function calculo() {
    var km = parseFloat(document.getElementById("local").value);
    var kg = parseFloat(document.getElementById("carga").value);

    if (km <= 50 && kg <= 100) {
        document.getElementById("frete").innerHTML = "Valor médio de frete: R$2.000";
    } else if (km <= 50 && kg < 500 && kg > 101) {
        document.getElementById("frete").innerHTML = "Valor médio de frete: R$3.500";
    } else if (km <= 50 && kg < 1000 && kg > 501) {
        document.getElementById("frete").innerHTML = "Valor médio de frete: R$5.000";
    } else if (km < 100 && kg > 51 && kg <= 100) {
        document.getElementById("frete").innerHTML = "Valor médio de frete: R$3.000";
    } else if (km < 100 && kg > 51 && kg < 500 && kg > 101) {
        document.getElementById("frete").innerHTML = "Valor médio de frete: R$5.000";
    } else if (km < 100 && kg > 101 && kg < 1000 && kg > 501) {
        document.getElementById("frete").innerHTML = "Valor médio de frete: R$7.000";
    } else if (km < 200 && km > 101 && kg <= 100){
        document.getElementById("frete").innerHTML = "Valor médio de frete: R$4.000";
    } else if (km < 200 && km >101 && kg < 500 && kg > 101){
        document.getElementById("frete").innerHTML = "Valor médio de frete: R$6.000";
    } else if(km < 200 && km > 101 && kg < 1000 && kg > 501) {
        document.getElementById("frete").innerHTML = "Valor médio de frete: R$8.000";
    } else {
        document.getElementById("frete").innerHTML = "Insira valores validos!";
    }
}