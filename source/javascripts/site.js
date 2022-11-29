// This is where it all goes :)

jQuery(document).ready(function($) {

  init();
  window.addEventListener('scroll', throttle(onScroll, 25));

});

function init() {
  $(".js-scroll-to").on("click", function(e) {
      e.preventDefault();
      var target = $(this).data("target");
      $('html, body').animate({
          scrollTop: $(target).offset().top
      }, 1000);
  });
};

function throttle(fn, delay) {
  let last;
  let timer;

  return () => {
    const now = +new Date;

    if (last && now < last + delay) {
      clearTimeout(timer);

      timer = setTimeout(() => {
        last = now;
        fn();
      }, delay);
    } else {
      last = now;
      fn();
    }

  };
}

function onScroll() {
  const $$header = document.querySelector('.js-header');
  if (window.pageYOffset > 20) {
    $$header.classList.add('open');
  } else {
    $$header.classList.remove('open');
  }
}
