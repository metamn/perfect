$(document).ready(function() {

  
  // Navigation, Menu: click
  $('#navigation li').click(function() {
    scroll($(this));
    var nav = $(this).parent().parent();
    
    if (nav.hasClass('menu')) {
      menuHide(nav);
    }
  });
  
  // Navigation: Scroll to the active section
  function scroll(item) {
    var index = item.index() + 2;
      
    var slide = $('section:nth-child(' + index + ')');
    scrollTo(slide);
    
    /* instead of item.siblings() we use $('#navigation li') to remove all highlights if there are more than one navigations on the page */
    /* otherwise the two or more navigations will have differently highlighted items which is confusing */
    $('#navigation li').removeClass('active');
    item.addClass('active');
  }
  
  
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
  
  
  

  // Scrolling to a div
  function scrollTo(div) {
    $("html, body").animate({ scrollTop: $(div).offset().top }, "slow");
    return false;
  }
});
