// let firstNumber = prompt("Digite o primeiro número:")
// let secondNumber = prompt("Digite o segundo número:")

// let checkEquals = firstNumber === secondNumber ? 'são iguais' : 'são diferentes'

// firstNumber = Number(firstNumber)
// secondNumber = Number(secondNumber)

// const sum = (firstNumber + secondNumber)

// let parOuImpar = sum % 2 == 0 ? 'par' : 'ímpar'

// const sub = (firstNumber - secondNumber)
// const mult = (firstNumber * secondNumber)
// const div = (firstNumber / secondNumber)
// const restoDiv = (firstNumber % secondNumber)


// alert(`Os dois números inseridos ${checkEquals}`)
// alert(`A soma dos dois números é ${sum}`)
// alert(`A soma dos dois números é ${parOuImpar}`)
// alert(`A subtração dos dois números é ${sub}`)
// alert(`A multiplicação dos dois números é ${mult}`)
// alert(`A divisão dos dois números é ${div}`)
// alert(`O resto da divisão dos dois números é ${restoDiv}`)

let listaDeEstudantes = [
  {
      nomeDoEstudante: 'Murilo',
      primeiraNota: 6,
      segundaNota: 9,
  },

  {
      nomeDoEstudante: 'Ana',
      primeiraNota: 5,
      segundaNota: 3,
  },

  {
      nomeDoEstudante: 'Sara',
      primeiraNota: 8,
      segundaNota: 8,
  }        
]

function calculaMedia(primeiraNota,segundaNota) {
let media = (primeiraNota + segundaNota) / 2
return media
}
 

for(let estudante of listaDeEstudantes){
  mediaIndividual = calculaMedia(estudante.primeiraNota, estudante.segundaNota)
  let aprovadoOuNao = mediaIndividual < 7 ? 'Infelizmente não foi dessa vez. Estude mais' : 'Parabéns pela sua aprovação'

  alert(`A média de ${estudante.nomeDoEstudante} é ${mediaIndividual}.
${aprovadoOuNao}`)
}       