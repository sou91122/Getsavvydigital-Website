$(document).ready(function () {

    //navbar toggle
    $('.navbar-toggler').click(function () {
        $(this).toggleClass('active');
        $('header').toggleClass('bg-white');
    });



    //owl carousel
    $('.product-list-carousel').owlCarousel({

        items: 4,
        loop: true,
        margin: 5,
        responsiveClass: true,
        nav: true,
        navText: ["<i class='lnr lnr-chevron-left'></i>", "<i class='lnr lnr-chevron-right'></i>"],
        dots: false,
        autoplay: true,
        autoplayTimeout: 4000,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            576: {
                items: 2,
                nav: false
            },
            768: {
                items: 3,
                nav: false
            },
            1200: {
                items: 4
            }
        }
    });


    $('.testimonial-carousel').owlCarousel({
        items: 2,
        loop: true,
        dots: false,
        responsiveClass: true,
        navText: ["<i class='lnr lnr-chevron-left'></i>", "<i class='lnr lnr-chevron-right'></i>"],
        autoplay: true,
        autoplayTimeout: 5000,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            768: {
                items: 2,
                nav: false
            }
        }
    });

    //Video play pause on click
    $('.playpause , #movie-video').on('click',function(){
        var movie_id = $('#movie-video').get(0);

        if(movie_id.paused){
            movie_id.play();
            $('.playpause').fadeOut();
        }
        else{
            movie_id.pause();
            $('.playpause').fadeIn();
        }
       
    })



    //Service-section-Video play pause on click
    $('.playpause , #movie-video1').on('click',function(){
        var movie_id = $('#movie-video1').get(0);

        if(movie_id.paused){
            movie_id.play();
            $('.playpause').fadeOut();
        }
        else{
            movie_id.pause();
            $('.playpause').fadeIn();
        }

    })

    // result page testimonials


    $('.testimonial-carousel1').owlCarousel({
        items: 4,
        loop: true,
        dots: false,
        responsiveClass: true,
        navText: ["<i class='lnr lnr-chevron-left'></i>", "<i class='lnr lnr-chevron-right'></i>"],
        autoplay: true,
        autoplayTimeout: 5000,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            768: {
                items: 2,
                nav: false
            },
            1024: {items: 3,
                nav: false}
        }
    });


});











$(window).on('load', function () {
    $(this).scrollTop(0);
    //sticky header
    $(window).scroll(function () {

        var ws = $(window).scrollTop();
        var nav_height = $('header').outerHeight();
        var header_top = $('header');
        if (ws >= nav_height) {
            header_top.addClass("fixed");
        } else {
            header_top.removeClass("fixed");
        }
    });

});