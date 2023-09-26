// hamIcon

let hamIcon=document.getElementById('hamIcon');
let menu=document.getElementById('menu');
let closeMenu=document.getElementById('close');
let overlay=document.getElementById('overlay');

hamIcon.addEventListener('click',function () {
    menu.classList.toggle('active');
    overlay.classList.toggle('active');
});
closeMenu.addEventListener('click',function () {
    menu.classList.remove('active');
    overlay.classList.remove('active');
});
overlay.addEventListener('click',function () {
    menu.classList.remove('active');
    overlay.classList.remove('active');
})


// swiper

var plan = new Swiper(".plan", {
    slidesPerView: 1,
    loop:true,
    spaceBetween: 30,
    breakpoints: {
        576: {
            slidesPerView: 2
        },
        992: {
            slidesPerView: 3
        },
        1200: {
            slidesPerView: 3
        }
    }
});

var brands = new Swiper(".brands", {
    slidesPerView: 2,
    loop:true,
    spaceBetween: 50,
    breakpoints: {
        576: {
            slidesPerView: 3
        },
        768: {
            slidesPerView: 4
        },
        1200: {
            slidesPerView: 6
        }
    }
});
var services = new Swiper(".services", {
    slidesPerView: 1,
    loop:true,
    spaceBetween: 30,
    breakpoints: {
        576: {
            slidesPerView: 2
        },
        992: {
            slidesPerView: 3
        },
        1200: {
            slidesPerView: 4
        }
    }
});
var testimonials = new Swiper(".testimonials", {
    slidesPerView: 1,
    loop:true,
    spaceBetween: 30,
    breakpoints: {
        992: {
            slidesPerView: 2
        },
    },
    pagination: {
        el: ".swiper-pagination",
    },
});
var blog = new Swiper(".blog", {
    slidesPerView: 1,
    loop:true,
    spaceBetween: 30,
    breakpoints: {
        992: {
            slidesPerView: 2
        },
        1200: {
            slidesPerView: 3
        },
    },
    pagination: {
        el: ".swiper-pagination2",
    },
});

// scroll top

$(window).on('scroll load' , function () {
    if ($(window).scrollTop() > 250) {
        $('#scrollTop').css('opacity' , '1').css('visibility' , 'visible').css('right','0px');
    } else {
        $('#scrollTop').css('opacity' , '0').css('visibility' , 'hidden').css('right','-80px');
    }
});
