import './scss/main.scss';
console.log('JS loaded')


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


/////////// 表單顯示

const prevButton = document.querySelector('.form__control--prev');
const nextButton = document.querySelector('.form__control--next');
const formAddress = document.querySelector('.form__address')
const formDelivery = document.querySelector('.form__delivery')
const formPayment = document.querySelector('.form__payment')
const form = document.querySelector('.form')

          ////////// 階段顯示
const stepperShapes = Array.from(document.querySelectorAll('.stepper>div'))
const stepperText = Array.from(document.querySelectorAll('.stepper>span'));

function showStep(stepNum=1) {
  stepperShapes.forEach(e => {
    if (stepperShapes.indexOf(e) < stepNum*2) {
      e.classList.add('darken')
    } else {
      e.classList.remove('darken')
    }
  })

  stepperText.forEach(e => {
    if (stepperText.indexOf(e) < stepNum) {
        e.classList.add('darken')
    } else {
      e.classList.remove('darken')
    }
  })
}
showStep()

        ///////////

let currentStep = 'first'

const stepFowrard = function (event) {
  event.preventDefault();
  switch (currentStep) {
    case 'first':
      formAddress.classList.add('hidden')
      formDelivery.classList.remove('hidden')
      prevButton.classList.remove('hidden')
      currentStep = 'second'
      showStep(2)
      break;
    case 'second':
      formDelivery.classList.add('hidden')
      formPayment.classList.remove('hidden')
      this.textContent = '確認下單'
      currentStep = 'third'
      showStep(3)
      break;
    case 'third':
      formPayment.classList.add('hidden')
      formAddress.classList.remove('hidden')
      form.submit()
      this.innerHTML = '下一步<span>&rarr;</span>'
      prevButton.classList.add('hidden');
      currentStep = 'first'
  }
}

const stepBack = function (event) {
    event.preventDefault();
    switch (currentStep) {
    case 'second':
      formDelivery.classList.add('hidden')
      formAddress.classList.remove('hidden')
      this.classList.add('hidden')
        currentStep = 'first'
        showStep(1)
      break;
    case 'third':
      formPayment.classList.add('hidden')
      formDelivery.classList.remove('hidden')
        currentStep = 'second'
        showStep(2)
  }
}

nextButton.addEventListener('click', stepFowrard);
prevButton.addEventListener('click', stepBack);


/////////////// 總金額計算
const products = [{
  id:'1',
  name: '破壞補丁修身牛仔褲',
  price: 1299
}, {
  id:'2',
  name: '刷色直筒牛仔褲',
  price: 3999
}]

const shopBag = document.querySelector('.shop-bag');
const deliveryFee = document.querySelector('.shop-bag__delivery-fee')
const total = document.querySelector('.shop-bag__total')

const delivery = document.querySelector('.form__delivery')
const deliveryOption = document.querySelectorAll('input[type="radio"]')

const countPrice = function ({target}) {
  const isClickOnBtn = target.classList.contains('counter-btn')
  if (!isClickOnBtn) return

  if (isClickOnBtn) {
    const changeNum = target.classList.contains('minus') ? -1 : 1
    const quantityTag = target.parentElement.children[1]
    let currentQty = Number(quantityTag.textContent)
    const priceTag = target.parentElement.nextElementSibling

    const clickedItem = target.parentElement.parentElement.dataset.id
    const price = products.find(e => e.id === clickedItem).price
    

    if (!currentQty && changeNum === -1) return
    quantityTag.innerHTML = `<span>${currentQty += changeNum}<span>`
    priceTag.innerHTML = `<div>$${Number(currentQty * price).toLocaleString()}</div>`
    addToTotal()
  }
}

const addDeliveryFee = function () {
  deliveryOption.forEach(e => {
    if (e.checked) {
      deliveryFee.textContent = e.parentElement.lastElementChild.textContent
      addToTotal()
      return
    }
  })
}

const priceTags = document.querySelectorAll('.shop-bag__item-price')

const addToTotal = function () {
  let subtotal = 0
  let deliveryFeeNum = Number(deliveryFee.textContent.slice(1).replace(',', ""))

  if (isNaN(deliveryFeeNum)) {deliveryFeeNum = 0}
  
  priceTags.forEach(e => {
    const priceNum = Number(e.textContent.slice(1).replace(',', ""))
    subtotal += priceNum
  })
  
  
  total.innerHTML = `<span class="shop-bag__total">$${(subtotal+deliveryFeeNum).toLocaleString()}</span>`
}

shopBag.addEventListener('click', countPrice);
delivery.addEventListener('click', addDeliveryFee);

/////////////