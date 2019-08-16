$(document).ready(function () {

  // smooth scrolling for nav-links
  const scrollLink = $('.scroll');

  // 'active' class switching
  $(window).scroll(function () {
    let scrollbarLocation = $(this).scrollTop();

    scrollLink.each(function () {

      let sectionOffset = $(this.hash).offset().top - 20;

      if (sectionOffset <= scrollbarLocation) {
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
      }
    });

    // remove 'active' class when not inside any #id
    if (scrollbarLocation <= 350) {
      $(this).removeClass('active');
    }
  });

});
