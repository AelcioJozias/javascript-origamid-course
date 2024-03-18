function iniciarNavegacaoPorFoto() {

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

function initSmoothScroll() {
    const menuLinksInternos = document.querySelectorAll('.js [href^="#"]')

    menuLinksInternos.forEach(link => link.addEventListener('click', scrollSuave))

    function scrollSuave(event) {
        event.preventDefault();
        const idHref = this.getAttribute('href')
        const secaoANavegar = document.querySelector('.js ' + idHref).offsetTop
        window.scrollTo({
            top:secaoANavegar,
            behavior:"smooth"
        })
    }
}

initSmoothScroll()

function initAnimatedScroll() {
    const sections = document.querySelectorAll(".js-scroll")

    if(sections.length) {
        const windowMetade = window.innerHeight * 0.65

        function animeScroll() {

            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top
                const isSectionVisible = (sectionTop - windowMetade) < 0
                if (isSectionVisible)
                    section.classList.add('ativo')

            })
        }
        animeScroll()
        window.addEventListener('scroll', animeScroll)
    }
}

initAnimatedScroll();













































