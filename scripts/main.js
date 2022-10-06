const badgeEl = document.querySelector('.badges');
window.addEventListener('scroll', function(){
    console.log(window.scrollY);
    if(760 <= this.window.scrollY){
        // badgeEl.style.display='none';
        gsap.to(badgeEl, 0.6, {
            opacity: 0,
            display: 'none'
        });
    }
    else{
        // badgeEl.style.display='block';
        gsap.to(badgeEl, 0.6, {
            opacity: 1,
            display: 'block'
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
