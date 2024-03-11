// 1) Duplique o menu e adicione ele em copy
const menu = document.querySelector('.menu')
const menuCopy = menu.cloneNode(true)

const copy = document.querySelector(`.copy`)

//exemplo de como inserir antes
copy.insertBefore(menuCopy, copy.querySelector('p') )

// exemplo de substituicao
// copy.replaceChild( menuCopy, copy.querySelector('p'))


// 2) Selecione o primeiro DT da dl de Faq
const firstDt = document.querySelector('dl :first-child')
console.log(firstDt)

// Selecione o DD referente ao primeiro DT
console.log(firstDt.nextElementSibling)

// Substitua o conteúdo html de .faq pelo de .animais
const faq = document.querySelector('#faq')
const animais = document.querySelector('.animais')
console.log('inner', animais.innerHTML)
console.log('outer', animais.outerHTML)

faq.innerHTML=animais.innerHTML

