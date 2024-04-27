document.addEventListener('DOMContentLoaded' , function() {
    $('.b-faq__top').click((e) => {
        $(e.target).closest('.b-faq-list__item').find('.b-faq__bottom').toggleClass('open')
        $(e.target).find('.b-faq-list__btn').toggleClass('open')
    })
});