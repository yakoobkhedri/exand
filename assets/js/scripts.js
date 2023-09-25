// hamIcon

let hamIcon=document.getElementById('hamIcon');
let menu=document.getElementById('menu');

hamIcon.addEventListener('click',function () {
    menu.classList.toggle('active');
})


// swiper
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

// hover bg

let whyUsRow=Array.from(document.querySelectorAll('.why-us-row > div'));
let whyUsImgs=Array.from(document.querySelectorAll('img[alt="why-us"]'));
let whyUsBigImg=document.getElementById('why-us-bigImg')

// whyUsRow[0].addEventListener('click',function () {
//     whyUsBigImg.style.backgroundImage = "url('assets/img/image-post-10-980x700.jpg')"; 
// })
