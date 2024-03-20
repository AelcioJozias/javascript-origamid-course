const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
// Remova o primeiro valor de comidas e coloque em uma variável
// Remova o último valor de comidas e coloque em uma variável
// Adicione 'Arroz' ao final da array
// Adicione 'Peixe' e 'Batata' ao início da array

const comidaPrimeiroValor = comidas.shift()
const comidaUltimoValor = comidas.pop()
comidas.unshift('Peixe')
comidas.push('Arroz')

//----------------------

const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
// Arrume os estudantes em ordem alfabética
// Inverta a ordem dos estudantes
// Verifique se Joana faz parte dos estudantes
// Verifique se Juliana faz parte dos estudantes

estudantes.sort()
estudantes.reverse()
estudantes.includes('Joana')
estudantes.includes('Juliana')


//----------------------
let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`
// Substitua section por ul e div com li,
// utilizando split e join

const stringFinalHtml = html.split('section').join('ul').split('div').join('li')
console.log(stringFinalHtml)


//----------------------

const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
// Remova o último carro, mas antes de remover
// salve a array original em outra variável

const arrayCopiDoOriginal = carros.slice()
console.log('array cópia:', arrayCopiDoOriginal)
carros.pop()
console.log('array original:', carros)


















