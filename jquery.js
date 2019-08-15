$(document).ready(function () {

  // smooth scrolling
  const scrollLink = $('.scroll');
  scrollLink.click(function (e) {
    e.preventDefault();
    $('body, html').animate({
      scrollTop: $(this.hash).offset().top
    }, 800);
  });

  // active link switching
  $(window).scroll(function () {
    let scrollbarLocation = $(this).scrollTop();

    scrollLink.each(function () {

      let sectionOffset = $(this.hash).offset().top - 20;

      if (sectionOffset <= scrollbarLocation) {
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
      }
    });

    if (scrollbarLocation <= 350) {
      $(this).removeClass('active');
    }
  })

});
