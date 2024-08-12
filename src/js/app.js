const burgerBtn = document.querySelector('.header__burger-container')
const dropDown = document.querySelector('.header__dropdown-block')
const skipBtn = document.querySelector('#skip')
const guide = document.querySelector('.guide')
const mainMenu = document.querySelector('#menu')
const burger = document.querySelector('#burger')
const slider = document.querySelector('#slider')
const form = document.querySelector('#form')

mainMenu.innerHTML += '<p>Это главное меню</p>'
burger.innerHTML += '<p>Это бургер меню</p>'
slider.innerHTML += '<p>Это слайдер</p>'
form.innerHTML += '<p>Это контакты</p>'

const guidePoints = [mainMenu, burger, slider, form]


let currentGuideIndex = 0;

function udateGuide(e) {
    for (let i = 0; i < guidePoints.length; i++) {
        if (e.target.matches('#next')) {

        }

    }
}





























burgerBtn.onclick = () => {
    burgerBtn.classList.toggle('active')
    dropDown.classList.toggle('active')
}

skipBtn.onclick = () => {
    guide.remove()
}