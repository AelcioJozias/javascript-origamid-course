// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
    {
        descricao: 'Taxa do Pão',
        valor: 'R$ 39',
    },
    {
        descricao: 'Taxa do Mercado',
        valor: 'R$ 129',
    },
    {
        descricao: 'Recebimento de Cliente',
        valor: 'R$ 99',
    },
    {
        descricao: 'Taxa do Banco',
        valor: 'R$ 129',
    },
    {
        descricao: 'Recebimento de Cliente',
        valor: 'R$ 49',
    },
];


let totalRecebimento = 0.0;
let totalTax = 0.0;


totalRecebimento = transacoes.forEach(e => calcularPorTipoDePagamento(e))

const totalValoresDiv = document.querySelector('.totalValores')

totalRecebimento = totalRecebimento.toString().padStart(totalRecebimento.toString().length + 3, 'R$ ')
totalTax = totalTax.toString().padStart(totalTax.toString().length + 3, 'R$ ')

totalValoresDiv.innerHTML += `<p><strong>Total Recebido</strong> ${totalRecebimento}</p>`
totalValoresDiv.innerHTML += `<p><strong>Total Taxa</strong> ${totalTax}</p>`


function calcularPorTipoDePagamento(objeto) {
    objeto.novaPro = "teste"
    if(objeto.descricao.includes('Recebimento'))
        totalRecebimento += Number.parseFloat( objeto.valor.replace('R$ ', ''))

    if(objeto.descricao.includes('Taxa'))
        totalTax += Number.parseFloat( objeto.valor.replace('R$ ', ''))
}

// Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';

console.log(transportes.split(';'))

// Substitua todos os span's por a's
const html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;

console.log(html.replaceAll('span', 'a'))

// Retorne o último caracter da frase
const frase = 'Melhor do ano!';

console.log(frase.charAt(frase.length - 1) )



