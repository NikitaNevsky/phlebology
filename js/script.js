$(document).ready(function(){
    $(".positive__slider .owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: true,
        items: 1
    });

    $(".doctors__list .owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            }
        }
    });
});