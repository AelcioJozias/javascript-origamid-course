function iniciarNavegacaoPorFoto() {


    /* esse 'js' estamos usando ele como um root, aplicando
    * todo o resto do código apenas se a class 'js' existir no elemento 'html', o que significa que o js
    * da página está ativo
    *  */
    document.documentElement.classList.add('js')

    const tabMenu = document.querySelectorAll('.js section.js-tabmenu li')
    const tabContent = document.querySelectorAll('.js .js-tabcontent section')

    if (tabMenu.length && tabContent.length) {
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

}

iniciarNavegacaoPorFoto();

function initAccordion() {
    const dtList = document.querySelectorAll('.js-accordion dt')
    const ddList = document.querySelectorAll('.js-accordion dd')
    if (dtList.length && ddList.length) {
        dtList[0].nextElementSibling.classList.add('ativo')
        dtList[0].classList.add('ativo')

        dtList.forEach(dt => dt.addEventListener('click', mostrarConteudo))

        function mostrarConteudo() {
            this.classList.toggle(`ativo`)
            this.nextElementSibling.classList.toggle('ativo')
        }
    }

}

initAccordion();








