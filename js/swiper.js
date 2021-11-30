const headSwiper = new Swiper('.idc-swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,


    // Default parameters
    slidesPerView: 1.5,
    spaceBetween: 15,


    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1.4,
            spaceBetween: 15
        },
        414: {
            slidesPerView: 1.7,
            spaceBetween: 15
        },
        // when window width is >= 480px
        576: {
            slidesPerView: 2,
            spaceBetween: 15
        },

        768: {
            slidesPerView: 3,
            spaceBetween: 15
        },
        1250: {
            slidesPerView: 3,
            spaceBetween: 25
        },
        // when window width is >= 640px

    },

    // Navigation arrows
    navigation: {
        nextEl: '.idc-head__swiper-button-next',
        prevEl: '.idc-head__swiper-button-prev',
    },


});