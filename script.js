const swiper = new Swiper('.swiper', {
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
  slidesPerView: 3,
  // Navigation arrows

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
const date = document.querySelectorAll('.swiper-card-date')
let day, month, year, hour, minutes, seconds
setInterval(() => {
  let currentDate = new Date()
  day = currentDate.getDate()
  month = currentDate.getMonth()
  year = currentDate.getFullYear()
  hour = currentDate.getHours()
  minutes = currentDate.getMinutes()
  seconds = currentDate.getSeconds()
  date.forEach((item) => {
    item.textContent = `${hour}:${minutes}:${seconds}`
  })
}, 1000);
const faqBtn = document.querySelectorAll('.open-close')
const faqInfo = document.querySelector('.FAQ-info')

faqBtn.forEach(function (element) {
  element.addEventListener('click', function () {
     element.children[0].classList.toggle('active');
     faqInfo.classList.toggle('info-unactive')
  })
})

const navBurger = document.querySelector('.nav-burger')
const navList = document.querySelector('.nav-list')
navBurger.addEventListener('click', function(){
  navList.classList.toggle('burger-hidden')
})


// modal

const overlay = document.querySelector('.overlay')
const modalClose = document.querySelector('.modal-close')
const cardBtn = document.querySelectorAll('.card-item-btn')
const headerBtn = document.querySelector('.header-btn')
const modalPrice = document.querySelector('.modal-price')
cardBtn.forEach(function(element){
  element.addEventListener('click', function(){
    modalPrice.textContent = element.previousElementSibling.textContent
    overlay.classList.add('overlay-active')
  })
})
headerBtn.addEventListener('click', function(){
    overlay.classList.add('overlay-active')
})
modalClose.addEventListener('click', function(){
  overlay.classList.remove('overlay-active')
})

// explore

const minSettings = ['Intel i5-2500k (4 core 3.3 GHz) or AMD Ryzen 3 1200 (4 core 3.1 GHz)','8 GB','Windows 10 64-bit','NVIDIA GTX 960 (4 GB) or AMD R9 290X (4 GB)','5.1','5.1','70 GB','4 GB']
const recommendedSettings = ['Intel i5-2500k (5 core 3.3 GHz) or AMD Ryzen 4 2200 (4 core 4.1 GHz)','16 GB','Windows 11 64-bit','NVIDIA GTX 960 (5 GB) or AMD R9 290X (4 GB)','6.1','6.1','72 GB','6 GB']
let pcCount = 1
let psCount = 1

const pcSwitcher = document.querySelector('.pcSwitcher')
const listPC = document.querySelectorAll('.pc')

pcSwitcher.addEventListener('click', function(){
  pcCount++
  pcSwitcher.firstElementChild.classList.toggle('switcher-active')
  listPC.forEach((element, index) => {
  pcCount % 2 == 0 ? element.textContent = recommendedSettings[index] : element.textContent = minimumSettings[index]
  });
})

const standardSettings = ['PS4','20.4.2018','Sony Interactive Entertainment Europe','Action, Adventure','English, Polish, Russian','English, Dutch, Polish, Russian, Turkish']
const limitedSettings = ['PS5','10.5.2018','Sony Interactive Entertainment Europe','Prof, Adventure','English, Polish, Russian,Ukrainian,Dutch','English,Polish, USa buy NOW']

const psSwitcher = document.querySelector('.psSwitcher')
const listPS = document.querySelectorAll('.ps')

psSwitcher.addEventListener('click', function(){
  psCount++
  psSwitcher.firstElementChild.classList.toggle('switcher-active')
  listPS.forEach((element, index) => {
  psCount % 2 == 0 ? element.textContent = limitedSettings[index] : element.textContent = standardSettings[index]
  });
})