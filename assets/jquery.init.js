$(document).ready(function() {

  // Navigation: scrolling to the section
  $('#navigation li').click(function() {
    if ($(this).hasClass('active')) {
      menuShow();
    } else {
      menuScroll($(this));
    }
  });
  
  
  // Scroll to a section on clicking a menu item
  function menuScroll(item) {
    var index = item.index() + 2;
      
    var slide = $('section:nth-child(' + index + ')');
    scrollTo(slide);
    
    $('#navigation li').removeClass('active');
    item.addClass('active');
    menuHide();
  }
  
  
  // Shows the otherwise hidden menu elements
  function menuShow() {
    $('#navigation li').show('slow');
  }
  
  
  // Make the active item is visible; the others hidden
  // The menu is pulled left to let the content be fully visible
  function menuHide() {
    // Move out to left
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
