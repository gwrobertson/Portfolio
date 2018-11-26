$(document).ready(function () {

  //animations
  // Check if element is scrolled into view
  function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemTop <= docViewBottom));
  }

  // If element is scrolled into view, fade it in
  $(window).scroll(function () {
    $('.scroll-animations-left').each(function () {
      if (isScrolledIntoView(this) === true) {
        $(this).addClass('animate-left');
      }
    });
  });

  $(window).scroll(function () {
    $('.scroll-animations-right').each(function () {
      if (isScrolledIntoView(this) === true) {
        $(this).addClass('animate-right');
      }
    });
  });

  $(window).scroll(function () {
    $('.scroll-animations .content').each(function () {
      if (isScrolledIntoView(this) === true) {
        $(this).addClass('fade-in');
      }
    });
  });

  $(window).scroll(function () {
    $('.scroll-animations .container').each(function () {
      if (isScrolledIntoView(this) === true) {
        $(this).addClass('fade-in');
      }
    });
  });


  // Smooth Scrolling
  $('a[href^="#"]').on('click', function (event) {
    if (this.hash !== '') {
      event.preventDefault();

      const hash = this.hash;

      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    } else  if(this.hash == ''){
      window.location.reload()
    }
  });

});

