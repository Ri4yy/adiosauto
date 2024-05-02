const swiperBrand = new Swiper('.swiper-brand', {
    // Optional parameters

    slidesPerView: 3,
    spaceBetween: 30,
 
    breakpoints: {
        320: {
            slidesPerView: 3.8,
            spaceBetween: 20
        },
        380: {
            slidesPerView: 3.4,
            spaceBetween: 20
        },
        420: {
            slidesPerView: 4,
            spaceBetween: 20
        },
        540: {
            slidesPerView: 4.5,
            spaceBetween: 20
        },
        600: {
            slidesPerView: 5,
            spaceBetween: 20
        },
        940: {
            slidesPerView: 7,
            spaceBetween: 20
        },
        1140: {
            slidesPerView: 9,
            spaceBetween: 25
        },
        1380: {
            slidesPerView: 11,
            spaceBetween: 20
        }
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
const swiperService = new Swiper('.swiper-service', {
    // Optional parameters

    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
 
    breakpoints: {
        320: {
            slidesPerView: 1.3,
            spaceBetween: 20
        },
        420: {
            slidesPerView: 1.8,
            spaceBetween: 20
        },
        540: {
            slidesPerView: 2.4,
            spaceBetween: 20
        },
        660: {
            slidesPerView: 2.8,
            spaceBetween: 20
        },
        768: {
            slidesPerView: 2.5,
            spaceBetween: 20
        },
        1024: {
            slidesPerView: 3.2,
            spaceBetween: 20
        },
        1280: {
            slidesPerView: 3.8,
            spaceBetween: 20
        },
        1480: {
            slidesPerView: 4.5,
            spaceBetween: 20
        },
        1800: {
            slidesPerView: 5.3,
            spaceBetween: 20
        }
    },
});

const swiperChoose = new Swiper('.swiper-choose', {
    freeMode: true,
    breakpoints: {
        320: {
            allowTouchMove: true,
            spaceBetween: 10,
            slidesPerView: 1,
            grid: {
              rows: 4,
              fill: "row",
            }
        },
        481: {
            slidesPerView: 1.2,
            spaceBetween: 20
        },
        540: {
            slidesPerView: 1.6,
            spaceBetween: 20
        },
        740: {
            slidesPerView: 2.2,
            spaceBetween: 20
        },
        920: {
            slidesPerView: 2.4,
            spaceBetween: 20
        },
        1200: {
            slidesPerView: 2.8,
            spaceBetween: 25
        },
        1380: {
            slidesPerView: 3.3,
            spaceBetween: 20
        }
    },
});

const swiperReviews = new Swiper('.swiper-reviews', {
    // Optional parameters

    slidesPerView: 3,
    spaceBetween: 30,
 
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        480: {
            slidesPerView: 1.2,
            spaceBetween: 20
        },
        600: {
            slidesPerView: 1.5,
            spaceBetween: 20
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        960: {
            slidesPerView: 2.5,
            spaceBetween: 20
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 20
        }
    },
});
const swiperTeam = new Swiper('.swiper-team', {

    slidesPerView: 3,
    spaceBetween: 30,
 
    breakpoints: {
        320: {
            slidesPerView: 1.2,
            spaceBetween: 20
        },
        480: {
            slidesPerView: 1.7,
            spaceBetween: 20
        },
        768: {
            slidesPerView: 2.6,
            spaceBetween: 20
        },
        1025: {
            slidesPerView: 2.2,
            spaceBetween: 20
        },
        1140: {
            slidesPerView: 2.5,
            spaceBetween: 20
        },
        1340: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        1580: {
            slidesPerView: 3.4,
            spaceBetween: 20
        }
    },
});