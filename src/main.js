import './scss/main.scss'
console.log('JS loaded')


const modeToggle = document.querySelector('.mode-switcher');

modeToggle.addEventListener('click', () => {
  alert('ww');
});


//日夜模式
const modeSwitcher = document.querySelector('.mode-switcher');
const logo = document.querySelector('.logo')
const body = document.querySelector('body')

const header = document.querySelector('header')

const changeImage = function () {
  const imgPath =
    body.classList.contains('darkmode') ? './image/logo-dark@2x.png' : './image/logo@2x.png';
  const modeIconPath = 
    body.classList.contains('darkmode') ? './image/sun-regular.svg#sun' : './image/moon-regular.svg#moon';
    logo.src = imgPath
  modeSwitcher.innerHTML = `<use href=${modeIconPath}></use>`
  
  const applyBackground = 
  body.classList.contains('darkmode') ? '#121212' : '#ffffff';
  header.style.backgroundColor = applyBackground
}

modeSwitcher.addEventListener('click', () => {
  body.classList.toggle('darkmode')
  changeImage()
});

//

const navTrigger = document.querySelector('.nav-trigger-button');

const toggleNavAndFeatures = function () {
  const isNavTriggered = document.querySelector('.nav-trigger').checked;
  if (isNavTriggered) {
    header.style.backgroundColor = ''

  } else {
    const applyBackground = 
    body.classList.contains('darkmode') ? '#121212' : '#ffffff';
    header.style.backgroundColor = applyBackground
  }
}

navTrigger.addEventListener('click', toggleNavAndFeatures);

