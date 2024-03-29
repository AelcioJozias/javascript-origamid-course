// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso
const cursos = document.querySelectorAll('.curso')

const cursosObjetos = []
cursos.forEach(e => {
    let curso = {}
    curso.tile = e.querySelector('h1').innerText
    curso.descricao = e.querySelector('p').innerText
    curso.aulas = e.querySelector('.aulas').innerText
    curso.horas = e.querySelector('.horas').innerText
    cursosObjetos.push(curso)
})
console.log('cursosObjetos', cursosObjetos)

// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];

const numerosMaioresQueCem = numeros.filter(e => e > 99)
console.log('numerosMaioresQueCem', numerosMaioresQueCem)

// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']

console.log('Instrumentos contém Baixo? ',instrumentos.find(e => e === 'Baixo') ? true : false)


// Retorne o valor total das compras
const compras = [
    {
        item: 'Banana',
        preco: 'R$ 4,99'
    },
    {
        item: 'Ovo',
        preco: 'R$ 2,99'
    },
    {
        item: 'Carne',
        preco: 'R$ 25,49'
    },
    {
        item: 'Refrigerante',
        preco: 'R$ 5,35'
    },
    {
        item: 'Quejo',
        preco: 'R$ 10,60'
    }
]

console.log('compras valor total', compras.reduce((acumulator, actualObject) =>{
    let v2Number = +Number.parseFloat(actualObject.preco.replace('R$ ', '').replace(',', '.')).toFixed(2)
    return acumulator + v2Number
}, 0))











