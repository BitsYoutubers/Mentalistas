var vamosJogar = prompt('Você possui interesse em jogar o jogo acerte o número? Se sim digite "sim", caso ao contrário digite "não"')
if(vamosJogar == ('sim')) {
  
  var nome = prompt('Bom, como sua resposta foi sim, digite seu nome para começarmos.')
  var secretNumber = parseInt(Math.random() * 1000);
  var chances = 15
  alert('Certo, vamos começar ' + nome + ', você possuiria ' + chances + ' chances, vamos começar?')
  numeroSecreto = parseInt(Math.random() * 1000);
  while(numeroSecreto == 0) {
    numeroSecreto = parseInt(Math.random() * 1000);
  }
  
  var quantidadeDeChutes = 0
  while(chute != numeroSecreto) {
    var chute = prompt('Digite um número entre 1 e 1000')
     quantidadeDeChutes = quantidadeDeChutes + 1
    
    if(chute == numeroSecreto) {
      alert('Você acertou o número! O número era ' + numeroSecreto + ', você acertou em ' + quantidadeDeChutes + ' chutes, vamos tentar a sorte novamente?')
    } else if(chute < numeroSecreto) {
        quantidadeDeChutes - 1
        alert('O número secreto é maior que ' + chute + ', tente novamente!')
      } else if(chute > numeroSecreto) {
        quantidadeDeChutes - 1
        alert('O número secreto é menor que ' + chute + ', tente novamente!')
      }
    
    if(quantidadeDeChutes == 15) {
      alert('Você chutou 15 vezes ' + nome + ', e por isso perdeu essa partida, o número correto era ' + numeroSecreto + ', tente novamente a sorte!')
      break;
    }
   }
  
}
else {
  alert('Fica para a próxima, caso queira tentar clique em "RUN".')
}

//parse -> analise
//var numeroSecreto = parseInt(Math.random() * 1001);

//while(chute != numeroSecreto) {
//  var chute = prompt('Digite um número entre 1 e 1000')

//  if(chute == numeroSecreto) {
//    alert('Acertou! O número era: ' + numeroSecreto + ', parabéns!')
//  } else if (chute > numeroSecreto) {
//    alert('Errou... o número secreto é menor que ' + chute + ', tente novamente...')
//  } else if (chute < numeroSecreto) {
//    alert('Errou.. o número secreto é maior que ' + chute + ', tente novamente...')
//  }
// 
