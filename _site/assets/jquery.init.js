$(document).ready(function() {



  

  // Navigation: click
  $('#navigation li').click(function() {
    if ($(this).hasClass('active')) {
      menuShow();
    } else {
      menuScroll($(this));
    }
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
    $('#navigation li').show('slow');
  }
  
  // Navigation: Make the active item visible; hide all others
  // The menu is pulled left to let the content be fully visible
  function menuHide() {
  
    // Move out to left
    $('#navigation').addClass('active');
    $('#navigation').animate( {
      left: '1.25em'
    }, 'slow', function() {
      // Animation complete.
    });
    
    // Hide non-active items
    $('#navigation li').each(function() {
      if (!($(this).hasClass('active'))) {
        $(this).hide('slow');
      }
    });
  }
  
  
  

  // Scrolling to a div
  function scrollTo(div) {
    $("html, body").animate({ scrollTop: $(div).offset().top }, "slow");
    return false;
  }
});
