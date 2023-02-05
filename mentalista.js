var numero = parseInt(Math.random() * 1000) + 1;
var tentativas = 10;

function verificar() {
          
    while (tentativas > 0 ){
        var chute = parseInt(document.getElementById("chuteNumero").value); 
                    //se o chute for igual ao número secreto faça
        if(chute == numero) {
             document.getElementById("resultado").innerHTML = "Uau! Você acertou o número secreto, ele era " + numero;
             return
        }          //se o chute for maior que número secreto faça
        else if(chute > numero) {
             document.getElementById("resultado").innerHTML = "Você errou! O número secreto é menor que " + chute;
             tentativas = tentativas -1;
             return
        }            //se o chute for menor que número secreto faça
        else if(chute < numero) {
             document.getElementById("resultado").innerHTML = "Você errou! O número secreto é maior "  + chute;
             tentativas = tentativas -1;
             return
        }
      
     }
        if (tentativas == 0) {
             document.getElementById("resultado").innerHTML = "Tentativas esgotaram! O número secreto é: " + numero; 
        }

}
