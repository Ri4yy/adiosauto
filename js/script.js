document.addEventListener('DOMContentLoaded' , function() {
    $('.b-faq__top').click((e) => {
        $(e.target).closest('.b-faq-list__item').find('.b-faq__bottom').toggleClass('open')
        $(e.target).find('.b-faq-list__btn').toggleClass('open')
    })

    $('.mobile-list__btn').click((e) => {
        $(e.target).closest('.mobile-list__item').toggleClass('open')
    })

    $('#openMenu, .overlay').click((e) => {
        $('.mobile-menu').toggleClass('open')
        $('.overlay').toggleClass('open')
        $('body').toggleClass('no-scroll')
    })

    $('.close-modal').click((e) => {
        $('.modal').removeClass('active')
    })
    $(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.modal').removeClass('active')
		}
	});
});