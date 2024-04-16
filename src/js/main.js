(function () {
    const scrollTop = document.querySelector('.scroll-top')
    const mobileMenu = document.querySelector('.mobile-menu')

    if (scrollTop) {
        window.addEventListener('scroll', checkScroll)
        checkScroll()

        function checkScroll() {
            if (scrollY > 40) {
                scrollTop.classList.add('_active')
            } else {
                scrollTop.classList.remove('_active')
            }
        }
    }

    if (mobileMenu) {
        document.addEventListener('click', (e) => {
            if (e.target.closest('[data-mobile]')) {
                e.preventDefault()
                mobileMenu.classList.add('_active')
            }
        })

        mobileMenu.addEventListener('click', (e) => {
            if (e.target.closest('.close') || !e.target.closest('.mobile-menu__inner')) {
                e.preventDefault()
                mobileMenu.classList.remove('_active')
            }
        })
    }

    if ('acc') {
        document.addEventListener('click', (e) => {
            if (e.target.closest('.acc__head')) {
                const accWrapper = e.target.closest('.accs')
                const accs = accWrapper.querySelectorAll('.acc')
                const acc = e.target.closest('.acc')
                if (acc.classList.contains('_active')) {
                    acc.classList.remove('_active')
                } else {
                    accs.forEach(el => el.classList.remove('_active'))
                    acc.classList.add('_active')
                }
            }
        })
    }
})()

// document.addEventListener('click', (e) => {
//     if (e.target.closest('a')) {
//         const href = e.target.closest('a').getAttribute('href')
//         if (href.includes('#')) return

//         e.preventDefault()
//         window.location.href = '/pharma-landing' + href
//     }
// })