const swiper = new Swiper('.swiper', {
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
  slidesPerView:3,
  // Navigation arrows

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
const date = document.querySelectorAll('.swiper-card-date')
let day,month,year,hour,minutes,seconds
setInterval(() => {
    let currentDate = new Date()
    day=currentDate.getDate()
    month=currentDate.getMonth()
    year=currentDate.getFullYear()
    hour=currentDate.getHours()
    minutes=currentDate.getMinutes()
    seconds=currentDate.getSeconds()
    date.forEach((item)=>{
        item.textContent = `${hour}:${minutes}:${seconds}`
    })
}, 1000);
const faqBtn = document.querySelector('.open-close')
const buttonText = document.querySelector('.FAQ-button-text')
const faqInfo = document.querySelector('.Faq-info')
if (buttonText.style.rotate == '0deg') {
  faqInfo.style.zIndex = '-1';
} else {
  
}
faqBtn.addEventListener('click', function(){
    buttonText.style.rotate = '45deg';
})