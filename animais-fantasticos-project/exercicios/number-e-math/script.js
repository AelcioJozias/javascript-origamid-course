// Retorne um número aleatório
// entre 1050 e 2000

// essa formula abaixo sempre funciona, se precisa só pegar no site da origamid
const number = Math.floor(Math.random() * (2000 - 1050 + 1) + 1050)
console.log("Número aleatório entre 1050 e 2000", number)


// Retorne o maior número da lista abaixo
const numeros = '4, 5, 20, 8, 9';
const arrayNumeros = numeros.split(",")
console.log('numero máximo:', Math.max(...arrayNumeros))

// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222',
    'R$ 230  ', 'r$  200'];

const valorTotal = listaPrecos.reduce((acumulador, valor) => acumulador += limparPreco(valor), 0)

console.log('valor total array limpo e calculado: \n',  valorTotal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}))

function limparPreco(preco) {
    const precoLimpo = preco.toUpperCase().replaceAll('R$', '').trim().replaceAll(',', '.')
    return +Number.parseFloat(precoLimpo).toFixed(2)
}

