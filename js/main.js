$('.card').on('click', function () {
    let currTab = $(this).parent().index();

    $('.card').removeClass('card-active');
    $(this).addClass('card-active');

    $('.tab-content').removeClass('active')
    $('.tab-content').eq(currTab).addClass('active')
})

$('.hamburger').on('click', function () {
    $('.head__menu').toggle();
})
$('.menu-close').on('click', function () {
    $('.head__menu').hide();
})

let scene = document.getElementById('scene');
let parallaxInstance = new Parallax(scene);


let mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal',
    spaceBetween: 50,
    slidesPerView: 3,
    loop: true,
    stopOnLastSlide: false,
    autoplay: {
        delay: 1000
    }
});

$(window).on("scroll load resize",function () {
    var pixelTop = $(window).scrollTop();
    if(pixelTop > 0 && $(document).width() > 998) {
        $('.head').addClass('active');
    }else if(pixelTop < 1) {
        $('.head').removeClass('active');
    }
});

$.validator.addMethod("regex", function(value, element, regexp) {
        var regExsp = new RegExp(regexp);
        return regExsp.test(value);
    },"Please check your input."
);

$("form").validate({
    rules: {
        firstName: {
            required: true,
            regex : "[A-Za-z]{1,32}"
        },
        phoneNumber: {
            digits : true,
            required: true,
            minlength: 10,
            maxlength: 11,
            regex: "[0-9]+"
        }
    },
    messages: {
        firstName: "Введите ваше имя правильно",
        phoneNumber: "Введите ваш номер"
    }
});


ymaps.ready(init);
function init(){
    var myMap = new ymaps.Map("map", {
        center: [56.311748732999206,44.017157394555866],
        controls: ['zoomControl','geolocationControl'],
        zoom: 10
    });

    myMap.balloon.open([51.85, 38.37], "Содержимое балуна", {
        closeButton: false
    });

    myMap.geoObjects.add(myPlacemark);
}