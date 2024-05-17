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

    $('.btn--gray').click((e) => {
        $(e.target).closest('.b-info').find('.b-info__wrapper').toggleClass('active')
    })

    let containerMark = document.querySelector('.brand-container'),
    containerModel = document.querySelector('.model-container');
    let data;
    if(typeof(containerMark) != 'undefined' && containerMark != null) {
        fetch('/js/api.json')
        .then((response) => {
            return response.json();
        })
        .then((responseData) => {
            data = responseData;
            
            data.forEach(el => {
                getMarks(el.id)
            });
        });

        containerMark.addEventListener('change', (e) => {
            clearModels();

            let marks = $(e.target).closest('.toggle').find('input').val();

            let selectedMark = data.find(el => el.id === marks);

            if (selectedMark) {
                getModels(selectedMark.models);
            }
        })


        function getMarks(mark) {

            $('.brand-container').append(`
            <div class="toggle toggle--1">
                <input id="brand-${mark}" type="radio" name="brand" value="${mark}">
                <label for="brand-${mark}"><img src="../img/logo/${mark}.png" alt=""></label>
            </div>
            `);

            updateBtnClass();
            
        }

        function getModels(models) {
            models.forEach((el) => {
                $('.model-container').append(`
                    <div class="toggle toggle--2">
                        <input id="model-${el.id}" type="radio" name="model" value="${el.name}">
                        <label for="model-${el.id}">${el.name}</label>
                    </div>
                `);
            })
            updateHeight();
        }

        function clearModels() {
            var nodes = containerModel.querySelectorAll('.toggle');

            for (var i = 0, len = nodes.length; i < len; i++) {
                var node = nodes[i];
                node.remove()
            }
        }

        

        const btnElement = document.querySelector('.b-properties__btn');

        function updateBtnClass() {
            const toggleElements = document.querySelector('.toggle--1');

            let totalWidth = 0;
            let totalHeight = 0;

            if (toggleElements) {
                let totalWidth = toggleElements.clientWidth;
                let totalHeight = toggleElements.clientHeight;
        
                btnElement.style.width = totalWidth + 'px';
                btnElement.style.height = totalHeight + 'px';
            }

            $('.toggle--1').click((e) => {
                updateModel();
            })
        }
        function updateHeight() {
            let heightModelBlock = $('.b-properties-top__wrapper').height();

            if(window.screen.width <= 480) {
                if(heightModelBlock === 122) {
                    $('.b-model__more').css('display', 'flex')
                } else {
                    $('.b-model__more').css('display', 'none')
                }
            } else {
                if(heightModelBlock === 155) {
                    $('.b-model__more').css('display', 'flex')
                } else {
                    $('.b-model__more').css('display', 'none')
                }
            }
        }
        function updateModel() {
        $('.model-container').removeClass('active')
        }

        window.addEventListener('resize', updateBtnClass);
        window.addEventListener('resize', updateHeight);

        $('.b-properties__btn').click((e) => {
            $('.b-properties__wrapper').toggleClass('active');
        })

        let toggleModel = false;
        $('.b-model__more').click((e) => {
            $('.model-container').toggleClass('active');
            if(toggleModel) {
                $("html, body").animate({ scrollTop: 140 }, "medium");
                return false;
            } else {
                toggleModel = true;
            }
        })
    };

    // Модальное окно
    function showModal(btnOpen, modalBody) {
        btnOpen.click(function() {
            modalBody.addClass('active');
            $('html').addClass('no-scroll');
            return false;
        });		
     
        $(document).keydown(function(e) {
            if (e.keyCode === 27) {
                e.stopPropagation();
                modalBody.removeClass('active');
                $('html').removeClass('no-scroll');
            }
        });
        
        modalBody.click(function(e) {
            if ($(e.target).closest('.modal__wrapper').length == 0) {
                $(this).removeClass('active');					
                $('html').removeClass('no-scroll');
            }
        });
        
        $('.close-modal').click((e) => {
            $('html').removeClass('no-scroll');
        })
    }
    showModal($('.open-modal'), $('.modal--form'));
});