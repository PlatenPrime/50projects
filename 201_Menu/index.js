const burger = document.querySelector('#burger')
const menu = document.querySelector('.menu-container')

burger.addEventListener('click', () => {
    burger.classList.toggle('active')
})