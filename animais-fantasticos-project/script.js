function iniciarNavegacaoPorFoto() {
    /* esse 'js' estamos usando ele como um root, aplicando
    * todo o resto do código apenas se a class 'js' existir no elemento 'html', o que significa que o js
    * da página está ativo
    *  */
    document.documentElement.classList.add('js')

    const tabMenu = document.querySelectorAll('.js section.js-tabmenu li')
    const tabContent = document.querySelectorAll('.js .js-tabcontent section')

    function mostrarConteudo(index) {
        tabContent.forEach(e => e.classList.remove('ativo'))
        tabContent[index].classList.add('ativo')
    }

    tabMenu.forEach((elemement, index) => {
        elemement.addEventListener('click', e => {
            mostrarConteudo(index)
        })
    })
}

iniciarNavegacaoPorFoto();



