$(function() {
  // Owl Carousel
  var owl = $(".owl-carousel");
  owl.owlCarousel({
    items: 3,
    dots: false,
    margin: 10,
    loop: true,
    nav: false,
    autoplay: true,
    autoplayTimeout: 4000,
        responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2
        }
    }
  });
});
