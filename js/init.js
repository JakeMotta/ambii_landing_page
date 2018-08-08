$(document).ready(function(){

  // https://bulma.io/documentation/components/navbar/
  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach(function ($el) {
      $el.addEventListener('click', function () {

        // Get the target from the "data-target" attribute
        var target = $el.dataset.target;
        var $target = document.getElementById(target);

        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

  // scroll animations
  new WOW().init();

  $(document).scroll(function () {

    var $nav = $(".is-fixed-top");
    $window = $(window);
    var lightDistance = $('#influence').offset().top;

    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());

    if ( $window.scrollTop() >= lightDistance ) {
      if($nav.hasClass("is-dark")) {
        $nav.removeClass("is-dark").addClass("is-light");
      }
    }
    else {
      if($nav.hasClass("is-light")) {
        $nav.removeClass("is-light").addClass("is-dark");
      }
    }
  });
});