// Verifique a distância da primeira imagem
// em relação ao topo da página
const firstImg = document.querySelector('.animais-lista img')
console.log(firstImg.getBoundingClientRect().top)

// Retorne a soma da largura de todas as imagens
const allImages = document.querySelectorAll('img')
console.log('Value from all img width calc: ', Array.from(allImages)
    .map(e => e.getBoundingClientRect().width)
    .reduce((acumulattor, initialValue) => acumulattor + initialValue) )

/* Verifique se os links da página possuem
 * o mínimo recomendado para telas utilizadas
 * com o dedo. (48px/48px de acordo com o google)
*/
const allLinks = document.querySelectorAll('a')
const recomendedSize = 48
Array.from(allLinks).forEach(link => {
    const linkMeasures= link.getBoundingClientRect()
    let linkWidth = linkMeasures.width
    let linkHeight = linkMeasures.height

    if ( linkWidth >=  recomendedSize && linkHeight >= recomendedSize) {
        return console.log(`is on a recomended <a> size, width: ${linkWidth}, height: ${linkHeight}`)
    } else {
        return console.log(`is not a recomended <a> size, width: ${linkWidth}, height: ${linkHeight}`)
    }
})

/* Se o browser for menor que 720px,
 * adicione a classe menu-mobile ao menu
*/
function updateMenuState() {
    const mobileMenu = window.matchMedia('(max-width: 700px)');
    const menuElement = document.querySelector('.menu');

    if (mobileMenu.matches) {
        menuElement.classList.add('menu-mobile');
    } else {
        menuElement.classList.remove('menu-mobile');
    }
}
updateMenuState();

window.addEventListener('resize', updateMenuState);
