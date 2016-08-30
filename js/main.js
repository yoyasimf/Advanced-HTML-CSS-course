// Can also be used with $(document).ready()
$(window).load(function() {
  // $('.nav-toggle').on('click', function(){
  //  $(this).toggleClass('close-nav');
  //  $('.navigation').toggleClass('open');
  //});
  //$('.navigation li a').on('click', function(){
  //  $('.navigation').removeClass("open");
  //});
  
  $('.nav-toggle').on('click', function(){
    $('.navigation').toggleClass('open');
  });

  $('.navigation li a').on('click', function(){
    $('.navigation').removeClass('open');
  });

  $('.flexslider').flexslider({
    animation: "fade",
    directionNav: false
  });

});