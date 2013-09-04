$(document).ready(function() {

  // Scrolling between divs through navigation
  $('#navigation li').click(function() {
    var index = $(this).index() + 2;
    
    var slide = $('section:nth-child(' + index + ')');
    scrollTo(slide);
    
    $('#navigation li').removeClass('active');
    $(this).addClass('active');
    
    return false;
  });
  

  // Scrolling to a div
  function scrollTo(div) {
    $("html, body").animate({ scrollTop: $(div).offset().top }, "slow");
    return false;
  }
});
