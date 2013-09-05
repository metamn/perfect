$(document).ready(function() {

  // Navigation: click
  $('#navigation li').click(function() {
    menuScroll($(this));
  });
  
  // Navigation: menu symbol click
  $('#navigation div').click(function() {
    menuShow();
  });
  
  
  // Navigation: Scroll to the active section
  function menuScroll(item) {
    var index = item.index() + 2;
      
    var slide = $('section:nth-child(' + index + ')');
    scrollTo(slide);
    
    $('#navigation li').removeClass('active');
    item.addClass('active');
    menuHide();
  }
  
  
  // Navigation: Show all menu items
  function menuShow() {
    $('#navigation').removeClass('active');
  }
  
  // Navigation: Pull menu off to left
  function menuHide() {
    $('#navigation').addClass('active');
    $('#navigation').addClass('activated');
    
    $('#navigation').animate( {
      left: '1.25em'
    }, 'slow', function() {
      // Animation complete.
    });
  }
  
  
  

  // Scrolling to a div
  function scrollTo(div) {
    $("html, body").animate({ scrollTop: $(div).offset().top }, "slow");
    return false;
  }
});
