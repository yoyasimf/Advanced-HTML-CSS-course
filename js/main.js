
$(window).ready(function() {

  var sections = $('section'),
    nav = $('nav');

  // init WOW.js
  new WOW().init();

  //Add active slider
  $('.flexslider').flexslider({
    animation: "fade",
    directionNav: false
  });

  // Add active class to navs when on section
  $(window).on('scroll', function () {
    var cur_pos = $(this).scrollTop();
    sections.each(function() {
      var top = $(this).offset().top - 100;
          bottom = top + $(this).outerHeight();
      if (cur_pos >= top && cur_pos <= bottom) {
          nav.find('a').removeClass('active');
          nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
      }
    });
  });

  // Smooth scroll
  nav.find('a').on('click', function () {
      var $el = $(this),
          id = $el.attr('href');
    $('html, body').animate({
      scrollTop: $(id).offset().top - 75
    }, 500);
    return false;
  });

  // Mobile Navigation
  $('.nav-toggle').on('click', function() {
    $(this).toggleClass('close-nav');
    nav.toggleClass('open');
    return false;
  }); 

  nav.find('a').on('click', function() {
    $('.nav-toggle').toggleClass('close-nav');
    nav.toggleClass('open');
  });

  $(window).on('scroll', function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 50) {
      $('.header').addClass('fixed');
    } else {
      $('.header').removeClass('fixed');
    }
  });

});
