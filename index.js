const darkBtn = document.querySelector('.dark-mode-btn');
const darkBtnWrapper = document.querySelector('.dark-btn-wrapper')
const htmlClasses = document.querySelector('html').classList;
const moonIcon = document.querySelector('ion-icon[name=moon]')
const sunIcon = document.querySelector('ion-icon[name=sunny]')

darkBtnWrapper.addEventListener("click", toggleDark);

function toggleDark() {
    moonIcon.classList.toggle("btn-animation");
    sunIcon.classList.toggle("sun-animation");
    htmlClasses.toggle('dark');
}