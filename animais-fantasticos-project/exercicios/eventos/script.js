// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const linksWithoutHttpPattern = 'a[href]:not([href^="https"])';
const linksWithoutHttp = document.querySelectorAll(linksWithoutHttpPattern)
linksWithoutHttp.forEach((link) => {
    link.addEventListener('click', handleActiveClassInElements)
})

function handleActiveClassInElements(e) {
    e.preventDefault()
    removeAllActiveClassFromLinks()
    addActiveClassOnAnElement(e.target);
}

function addActiveClassOnAnElement(element) {
    element.classList.add('active')
}

function removeAllActiveClassFromLinks() {
    linksWithoutHttp.forEach(link => {
        link.classList.remove('active')
    })
}



// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const body= document.body
body.addEventListener('click', e => {
    e.preventDefault()
    console.log(e.target)
})

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento
body.addEventListener('click', e => {
    e.preventDefault()
    e.target.remove()
})

// Se o usuário clicar na tecla (t), aumente todo o texto do site.
// document.documentElement = é uma forma de pegar o html
document.documentElement.addEventListener('keyup', e => {
    if (e.key === 't') {
        document.documentElement.classList.toggle('bigFont')
    }
})

