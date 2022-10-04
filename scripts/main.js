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