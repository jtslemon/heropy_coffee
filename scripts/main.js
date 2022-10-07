const badgeEl = document.querySelector('.badges');
const topbtnEl = document.querySelector('.top_btn');

topbtnEl.addEventListener('click', function(){
    gsap.to(window, 0.6, {
        scrollTo:0
    });
});
window.addEventListener('scroll', function(){
    console.log(window.scrollY);
    if(760 <= window.scrollY){
        // badgeEl.style.display='none';
        gsap.to(badgeEl, 0.6, {
            opacity: 0,
            display: 'none'
        });
        gsap.to(topbtnEl, 0.6, {
            opacity: 1
        });
    }
    else{
        // badgeEl.style.display='block';
        gsap.to(badgeEl, 0.6, {
            opacity: 1,
            display: 'block'
        });
        gsap.to(topbtnEl, 0.6, {
            opacity: 0
        });
    }
});

// gsap.to(요소, 시간, 속성)

const fadeEl = document.querySelectorAll('.fadeIn');

fadeEl.forEach(function(fadeEl, index){
    gsap.to(fadeEl, 1, {
        delay: (index + 1)*0.7,
        opacity: 1
    });
});

const promotionEl = document.querySelector('section.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
// 토글 버튼을 클릭했을 때
promotionToggleBtn.addEventListener('click', function () {
    if(promotionEl.classList.contains('hide')){ // 만약 promotion클래스에 hide서식이 있다면
        promotionEl.classList.remove('hide');
    }
    else{
        promotionEl.classList.add('hide');
    }
});

gsap.to('.m_img1', 1.5, {
    delay: .7,
    y: 15,
    repeat: -1,
    yoyo: true,
    ease: Power1.easeInOut
});
gsap.to('.m_img2', 2, {
    delay: .3,
    y: -15,
    repeat: -1,
    yoyo: true,
    ease: Power1.easeInOut
});
gsap.to('.m_img3', 2.5, {
    delay: .1,
    y: 15,
    repeat: -1,
    yoyo: true,
    ease: Power1.easeInOut
});

// 6, 7, 8, 10콘텐츠가 화면의 80% 지점에 보일때 동작하는 스크립트
const spyEl = document.querySelectorAll('section.scroll-spy');

spyEl.forEach(function(spyEl){
    new ScrollMagic
    .Scene({
        triggerElement: spyEl,
        triggerHook: 0.8
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});

// new Swiper('.awards .swiper', {
//     autoplay: true,
//     loop: true,
//     spaceBetween: 30,
//     slidesPerView: 5,
//     navigation: {
//         prevEl: '.awards .swiper-button-prev',
//         nextEl: '.awards .swiper-button-next'
//     }
// });
new Swiper('.awards .swiper', {
    autoplay: true, // 자동 재생 여부
    loop: true, // 반복 재생 여부
    spaceBetween: 30, // 슬라이드 사이 여백
    slidesPerView: 5, // 한 번에 보여줄 슬라이드 개수
    navigation: { // 슬라이드 이전/다음 버튼 사용
      prevEl: '.awards .swiper-button-prev', // 이전 버튼 요소
      nextEl: '.awards .swiper-button-next' // 다음 버튼 요소
    }
});

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();