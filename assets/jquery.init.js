$(document).ready(function() {

  // Navigation: scrolling to the section
  $('#navigation li').click(function() {
    var index = $(this).index() + 2;
    
    var slide = $('section:nth-child(' + index + ')');
    scrollTo(slide);
    
    $('#navigation li').removeClass('active');
    $(this).addClass('active');
    
    menu();
    
    return false;
  });
  
  
  // Menu: active item is visible; the others hidden
  // - it behaves like a menu on mobiles and smartphones
  function menu() {
    
  }
  

  // Scrolling to a div
  function scrollTo(div) {
    $("html, body").animate({ scrollTop: $(div).offset().top }, "slow");
    return false;
  }
});
