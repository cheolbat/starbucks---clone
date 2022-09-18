const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input')

searchEl.addEventListener('click', ()=>{
  searchInputEl.focus()
})
searchInputEl.addEventListener('focus',()=>{
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder','통합검색')
});
searchInputEl.addEventListener('blur',()=>{
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder','')
});

const badgeEl = document.querySelector('.badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(()=>{
  if(window.scrollY > 500){
    gsap.to(badgeEl, 0.3,{
      opacity: 0,
      display: 'none'
    })
    // to-top 보이기
    gsap.to(toTopEl,0.2,{
      x: 0,
    })
  } else {
    gsap.to(badgeEl, 0.3,{
      opacity: 1,
      display: 'block'
    })
    // to-top 숨기기
    gsap.to(toTopEl,0.2,{
      x: 100,
    })
  }
}, 300))
toTopEl.addEventListener('click',()=>{
  gsap.to(window, 0.7, {
    scrollTo:0
  })
})

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach((fadeEl, index)=>{
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.3,
    opacity: 1
  });
});

new Swiper('.notice-line .swiper-container',{
  direction: 'vertical',
  autoplay: true,
  loop: true
});

new Swiper('.promotion .swiper-container', {
  slidesPerView: 3,
  spaceBetween:10,
  centeredSlides: true,
  loop:true,
  autoplay: {
    delay: 5000
  },
  pagination: {
    el:'.promotion .swiper-pagination',
    clickable: true
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});
new Swiper('.awards .swiper-container', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl : '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
})

const promotionEl = document.querySelector('.promotion');
const PromotionTglBtn = document.querySelector('.toggle-promotion');
let isToggle = false;

PromotionTglBtn.addEventListener('click',()=>{
  isToggle = !isToggle;
  if(isToggle){
    promotionEl.classList.add('hide')
  }else{
    promotionEl.classList.remove('hide')
  }
})
// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObj(selector, delay, size) {
  // gsap.to(요소, 시간, 옵션)
  gsap.to(
    selector, 
    random(1.5, 2.5), 
    {
      y: size,
      repeat: -1,
      yoyo: true,
      ease: Power1.easeInOut,
      delay: random(0, delay)
    }
  );  
}
floatingObj('.floating1', 1, 15)
floatingObj('.floating2', 0.5, 15)
floatingObj('.floating3', 1.5, 20)

const spyEls = document.querySelectorAll('section.scroll-spy')
spyEls.forEach((spyEl)=>{
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, //보여짐 여부를 감시할 요소를 지정 
      triggerHook: 0.8 // 뷰포트 0~1 사이에 감시 지점 설정
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
})
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();