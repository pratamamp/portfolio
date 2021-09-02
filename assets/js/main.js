
/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose) {
    navClose.addEventListener('click', () => {
         navMenu.classList.remove('show-menu')
    })
}
/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills__content'),
      skillsHeader = document.querySelectorAll('.skills__header ')

function toggleSkills() {
    let itemClass = this.parentNode.className

    for(i=0; i < skillsContent.length; i++) {
        skillsContent[i].className= 'skills__content skills__close'
    }
    if(itemClass === 'skills__content skills__close') {
        this.parentNode.className = 'skills__content skills__open'
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills)
})
/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')

        tabs.forEach(tab => {
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
})

/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll('.services__modal'),
      modalBtns = document.querySelectorAll('.services__button'),
      modalCloses = document.querySelectorAll('.services__modal-close')

let modal = function(modalClick) {
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modal(i)
    })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView)=> {
            modalView.classList.remove('active-modal')
        })
    })
})
/*==================== PORTFOLIO SWIPER  ====================*/
let swiper = new Swiper(".portfolio__container", {
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    
  });

/*==================== TESTIMONIAL ====================*/


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

const value = '40%'
const className = 'skills__react'

// const react = document.getElementById('react')
// react.classList.add(className)
// const el = document.querySelector(`.${className}`)
// el.style.width = value


async function loadData() {
    let data = await fetch('../../data.json')
        .then(res => res.json())
    
    document.title = data.title
    data.frontend.map((item) => {
        let html = `<div class="skills__data"><div class="skills__titles">`
                    +`<h3 class="skills_name">${item.title}</h3>`
                    +`<span class="skills__number">${item.value}</span>`
                    +`</div><div class="skills__bar">`
                    +`<span class="skills__percentage" style="width:${item.value}%"></span>`
                    +`</div></div>`
        let el = document.getElementById('frontend')
        el.insertAdjacentHTML('beforeend', html)
    })
    
    data.backend.map((item) => {
        let html = `<div class="skills__data"><div class="skills__titles">`
                    +`<h3 class="skills_name">${item.title}</h3>`
                    +`<span class="skills__number">${item.value}</span>`
                    +`</div><div class="skills__bar">`
                    +`<span class="skills__percentage" style="width:${item.value}%"></span>`
                    +`</div></div>`
        let el = document.getElementById('backend')
        el.insertAdjacentHTML('beforeend', html)
    })

    data.design.map((item) => {
        let html = `<div class="skills__data"><div class="skills__titles">`
                    +`<h3 class="skills_name">${item.title}</h3>`
                    +`<span class="skills__number">${item.value}</span>`
                    +`</div><div class="skills__bar">`
                    +`<span class="skills__percentage" style="width:${item.value}%"></span>`
                    +`</div></div>`
        let el = document.getElementById('design')
        el.insertAdjacentHTML('beforeend', html)
    })

    data.game.map((item) => {
        let html = `<div class="skills__data"><div class="skills__titles">`
                    +`<h3 class="skills_name">${item.title}</h3>`
                    +`<span class="skills__number">${item.value}</span>`
                    +`</div><div class="skills__bar">`
                    +`<span class="skills__percentage" style="width:${item.value}%"></span>`
                    +`</div></div>`
                    let el = document.getElementById('game')
                    el.insertAdjacentHTML('beforeend', html)
                })

    let left = true
    data.education.map((item) => {
        let liner = '<div><span class="qualification__rounder">'
                    +'</span><span class="qualification__line"></span></div>'

        let html = '<div class="qualification__data">'
                   +`${!left ? `<div></div>${liner}` : ''}`
                    +'<div>'
                    +`<h3 class="qualification__title">${item.title}</h3>`
                    +`<span class="qualification__subtitle">${item.subtitle}</span>`
                    +'<div class="qualification__calendar">'
                    +'<i class="uil uil-calendar-alt"></i>'
                    +`${item.time}`
                    +'</div>'
                    +'</div>'
                    +`${left ? liner : ''}`
                    +'</div>'    
            
        let el = document.getElementById('education')

        el.insertAdjacentHTML('beforeend', html)
        left = !left
    })

    data.work.map((item) => {
        let liner = '<div><span class="qualification__rounder">'
                    +'</span><span class="qualification__line"></span></div>'

        let html = '<div class="qualification__data">'
                   +`${!left ? `<div></div>${liner}` : ''}`
                    +'<div>'
                    +`<h3 class="qualification__title">${item.title}</h3>`
                    +`<span class="qualification__subtitle">${item.subtitle}</span>`
                    +'<div class="qualification__calendar"><i class="uil uil-calendar-alt"></i>'
                    +`${item.time}</div></div>`
                    +`${left ? liner : ''}</div>`
            
        let el = document.getElementById('work')

        el.insertAdjacentHTML('beforeend', html)
        left = !left
    })

    data.portfolio.map((item, index) => {
        let html = `<!--==================== PORTFOLIO ${index+1} ====================-->`
            +'<div class="portfolio__content grid swiper-slide">'
            +`<img src="${item.image}" alt="" class="portfolio__img">`
            +`<div class="portfolio__data"><h3 class="portfolio__title">${item.title}</h3>`
            +`<p class="portfolio__description">${item.description}</p>`
            +'<a href="#" class="button button--flex button--small portfolio__button">'
            +'Demo<i class="uil uil-arrow-right button__icon"></i>'
            +'</div></div>'
        swiper.appendSlide(html)
    })
    
}

function fragmentFromStrings(strHTML) {
    var temp = document.createElement('template')
    temp.innerHTML = strHTML
    return temp.content
}

loadData()
 /*
<div class="portfolio__content grid swiper-slide">
    <img src="./assets/img/portfolio1.jpg" alt="" class="portfolio__img">

    <div class="portfolio__data">
        <h3 class="portfolio__title">Modern Website</h3>
        <p class="portfolio__description">Website adaptable to all devices, with ui components and animated interactions.</p>
        <a href="#" class="button button--flex button--small portfolio__button">
            Demo
            <i class="uil uil-arrow-right button__icon"></i>
        </a>
    </div>
</div>
 */