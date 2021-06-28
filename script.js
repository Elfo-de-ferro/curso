var nome
var idade
var dinheiro
var altura
function capturar (){ 
    nome = document.getElementById('nome').value;
    idade = document.getElementById('idade').value;
    dinheiro = document.getElementById('dinheiro').value;
    altura = document.getElementById('altura').value;

    if ((idade>=15)&&(dinheiro>=9)&&(altura>=1.45)){
        alert(nome +" pode entrar, aproveite");
    }else {
        alert(nome +" não pode entrar, sinto muito")
    }

}