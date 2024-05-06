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

fetch('/js/api.json')
.then((response) => {
    return response.json();
})
.then((responseData) => {
    data = responseData;
    console.log(data)
    data.forEach(el => {
        getMarks(el.id)
    });
});

containerMark.addEventListener('change', (e) => {
    clearModels();

    let marks = e.target.value;

    let selectedMark = data.find(el => el.id === marks);

    if (selectedMark) {
        getModels(selectedMark.models);
    }
})


function getMarks(mark) {

    // $('.brand-container').append(`
    // <div class="toggle toggle--1">
    //     <input id="brand-${mark}" type="radio" name="brand" value="${mark}">
    //     <label for="brand-${mark}"><img src="../img/logo/audi.png" alt=""></label>
    // </div>
    // `);
}

function getModels(models) {
    models.forEach((el) => {
        let option = document.createElement("option");
        option.value = el.name;
        option.innerHTML = el.name;
        containerModel.append(option);
    })
}

function clearModels() {
    while (containerModel.options.length > 0) {
        containerModel.remove(0);
    }

    let initialOption = document.createElement("option");
    initialOption.value = "";
    initialOption.innerHTML = "Выберите модель авто";
    containerModel.appendChild(initialOption);
}
});