$(document).ready(function () {

  // 'active' class switching
  const scrollLink = $('.scroll');

  $(window).scroll(function () {
    let scrollbarLocation = $(this).scrollTop();

    scrollLink.each(function () {

      let sectionOffset = $(this.hash).offset().top - 20;

      if (sectionOffset <= scrollbarLocation) {
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
      }
    });

  });

  $(window).scroll(function () {

    if ($(this).scrollTop() < 300) {
      $('.navigation-link').removeClass('active');
    }
  });

  // // close project info with esc key and off click
  // const project = $('#project-info')[0];
  // //
  // // $(document).on('click', function (e) {
  // //   if ($(e.target).closest(project).length === 0) {
  // //     $(project).hide();
  // //   }
  // // });
  //
  // $(document).on('keydown', function (e) {
  //   if (e.key === 27) {
  //     $(project).hide();
  //   }
  // });

});