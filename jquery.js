$(document).ready(function() {
  // 'active' class switching
  const scrollLink = $('.scroll');

  $(window).scroll(function() {
    let scrollbarLocation = $(this).scrollTop();

    scrollLink.each(function() {
      let sectionOffset = $(this.hash).offset().top - 20;

      if (sectionOffset <= scrollbarLocation) {
        $(this).addClass('active');
        $(this)
          .siblings()
          .removeClass('active');
      }
    });
  });

  $(window).scroll(function() {
    if ($(this).scrollTop() < 300) {
      $('.navigation-link').removeClass('active');
    }
  });

  $(window)
    .scroll(function() {
      var windowBottom = $(this).scrollTop() + $(this).innerHeight() + 500;
      $('.fade').each(function() {
        var objectBottom = $(this).offset().top + $(this).outerHeight();

        if (objectBottom < windowBottom) {
          if ($(this).css('opacity') == 0) {
            $(this).fadeTo(500, 1);
          }
        } else {
          if ($(this).css('opacity') == 1) {
            $(this).fadeTo(500, 0);
          }
        }
      });
    })
    .scroll();
});
