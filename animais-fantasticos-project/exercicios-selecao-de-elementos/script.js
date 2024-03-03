// ------------DESAFIOS-----------//

// Retorne no console todas as imagens do site
const allImages = document.getElementsByTagName("img")
console.log(allImages)

// Retorne no console apenas as imagens que começaram com a palavra imagem
const imagesThatBeginWithImagemName = document.querySelectorAll('[src^="img/imagem"]')
console.log(imagesThatBeginWithImagemName)

// Selecione todos os links internos (onde o href começa com #)
const linkThatBeginWithHasg = document.querySelectorAll('[href^="#"]')
console.log(linkThatBeginWithHasg)

// Selecione o primeiro h2 dentro de .animais-descricao
const firstH2InAnimalsDescription = document.querySelector('.animais-descricao h2')
console.log(firstH2InAnimalsDescription)

// Selecione o último p do site
const lastPTagOnSite = document.querySelector('.copy p')
console.log(lastPTagOnSite)

