// Adicione a classe ativo a todos os itens do menu
const menuItemsToAddActiveClass = document.querySelectorAll('.menu li')
menuItemsToAddActiveClass.forEach((value) => {
    const allClass = value.classList
    allClass.add('ativo')
})
// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
const menuItemsToRemoveActiveClass = document.querySelectorAll('.menu li')
menuItemsToRemoveActiveClass.forEach((value,index) => {
    if(index !== 0) {
        const allClass = value.classList
        allClass.remove('ativo')
    }
})

// Verifique se as imagens possuem o atributo alt
const animalsList = document.querySelectorAll('.animais-lista img')
animalsList.forEach((img, index) => {
    console.log(`The image from index ${index} has the alt tag?  ${img.hasAttribute('alt')}`)
})

// Modifique o href do link externo no menu
const menuItem = document.querySelector('.menu ul li:last-child a')
menuItem.setAttribute('href', 'https://br.linkedin.com/in/aelcio-jozias/en?trk=people-guest_people_search-card')

