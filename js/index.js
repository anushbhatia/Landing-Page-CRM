$(document).ready(function(){

  // OWL CAROUSEL - https://owlcarousel2.github.io/OwlCarousel2/
  $('#owl-2 .owl-carousel').owlCarousel(
    {
      items: 5,
      margin: 16,
      stagePadding: 32,
      loop: true,
      autoplay: true,
      autoplaySpeed: 500,
      navSpeed: 500,
      dots: false,
      dotsEach: true,
      nav: true,
      // navText: ['Back','Next'],
      navText: ['',''],
      autoplayTimeout: 2000,
      autoplayHoverPause: false,
      animateOut: 'slideOutDown',
      animateIn: 'flipInX',
    }
  );

});
