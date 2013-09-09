$(document).ready(function() {

  
  // Navigation, Menu: click
  $('#navigation li').click(function() {
    // navigation
    scroll($(this));
    
    // if menu is hidden then show it
    $('#navigation.menu').show();
    
    // menu
    var menu = $(this).parent().parent();
    if (menu.hasClass('menu')) {
      menuHide(menu);
    }
  });
  
  // Menu: symbol click
  $('#navigation.menu div').click(function() {
    menuShow($(this));
  });
  
  // Menu: Show all menu items
  function menuShow(item) {
    item.parent().addClass('active');
  }
  
  // Menu: Hide menu items
  function menuHide(item) {
    item.removeClass('active');
  }
  
  
  // Arrow click
  $('#arrows li').click(function() {
    var direction = $(this).index();
    var parent = $(this).parent().parent().parent();
    var index = parent.index();
    
    if (direction == 0) {
      var slide = (index == 1) ? '' : $('section:nth-child(' + index + ')');
      scrollTo(slide);
    } else {
      index += 2;
      var slide = $('section:nth-child(' + index + ')');
      scrollTo(slide);
    }
  });
  
  
  // Navigation: Scroll to the active section
  function scroll(item) {
    var index = item.index() + 1;
    
    slide = (index == 1) ? '' : $('section:nth-child(' + index + ')');
    scrollTo(slide);
    
    /* instead of item.siblings() we use $('#navigation li') to remove all highlights if there are more than one navigations on the page */
    /* otherwise the two or more navigations will have differently highlighted items which is confusing */
    $('#navigation li').removeClass('active');
    item.addClass('active');
  }
  

  // Scrolling to a div
  // - if no div then scroll to top
  function scrollTo(div) {
    (div.length) ? $("html, body").animate({ scrollTop: $(div).offset().top }, "slow") : $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  }
});
