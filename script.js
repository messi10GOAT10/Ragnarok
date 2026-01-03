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
const faqInfo = document.querySelector('.Faq-info')
// if (buttonText.style.rotate == '0deg') {
//   faqInfo.style.zIndex = '-1';
// } else {

// }
faqBtn.forEach(function (element) {
  element.addEventListener('click', function () {
     element.children[0].classList.toggle('active');
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
const modalPrice = document.querySelector('.modal-price')
cardBtn.forEach(function(element){
  element.addEventListener('click', function(){
    modalPrice.textContent = element.previousElementSibling.textContent
    overlay.classList.add('overlay-active')
  })
})
modalClose.addEventListener('click', function(){
  overlay.classList.remove('overlay-active')
})