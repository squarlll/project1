$(document).ready(function(){
	$(".owl-carousel").owlCarousel();
});
$('.owl-carousel').owlCarousel({
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    loop:true,
    margin:7,
    nav:true,
    responsive:{
        0:{
            items:1,
            dots:false,
            nav:true
        },
        560:{
            items:2,
            dots:false,
            nav:true
        },
        830:{
            items:4,
            nav:true,
            nav:false
        },
        830:{
            items:4,
            nav:true,
            nav:false
        }
    }
});
var owl = $('.owl-carousel');
owl.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY>0) {
        owl.trigger('next.owl');
    } 
    else {
        owl.trigger('prev.owl');
    }
    e.preventDefault();
});