//Declaração das variaveis
var nome
var idade
var dinheiro
var altura

function capturar (){

    //Receber os valores
    nome = document.getElementById('nome').value;              
    idade = document.getElementById('idade').value;             
    dinheiro = document.getElementById('dinheiro').value;       
    altura = document.getElementById('altura').value;           


    if ((idade>=15)&&(dinheiro>=9)&&(altura>=1.45)){             //todos OK
        alert(nome +" pode entrar, aproveite o parque"); }
    
    if ((idade<15)&&(dinheiro>=9)&&(altura>=1.45)){              //idade                                                       
        alert(nome +" não tem idade suficiente, o minímo é 15 anos") }

    if ((idade>=15)&&(dinheiro<9)&&(altura>=1.45)){              //dinheiro                                             
        alert(nome +" não tem dinheiro suficiente, preço de R$9,00"); }

    if ((idade>=15)&&(dinheiro>=9)&&(altura<1.45)){              //altura                                          
        alert(nome +" não tem altura o suficiente, tamanho minimo 1,45m"); }

    if ((idade<15)&&(dinheiro<9)&&(altura>=1.45)){          //idade e dinheiro                                                      
        alert(nome +" não tem idade e dinheiro o suficiente") }
    
    if ((idade<15)&&(dinheiro>=9)&&(altura<1.45)){          //idade e altura                                                     
        alert(nome +" não tem idade e altura o suficiente") }
    
    if ((idade>=15)&&(dinheiro<9)&&(altura<1.45)){             //dinheiro e altura
         alert(nome +" não tem dinheiro e altura o suficiente"); }
        
    if ((idade<15)&&(dinheiro<9)&&(altura<1.45)){             //nda
          alert(nome +" não tem idade, dinheiro e altura suficiente"); }}
