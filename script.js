// Smooth scrolling for internal links
$(document).ready(function() {
    $('a[href^="#"]').on('click', function(event) {
      var target = $(this.getAttribute('href'));
      if (target.length) {
        event.preventDefault();
        $('html, body').stop().animate({
          scrollTop: target.offset().top
        }, 1000);
      }
    });
  
    // Add active class to navbar links on scroll
    $(window).scroll(function() {
      var scrollPosition = $(window).scrollTop();
      $('.nav-link').each(function() {
        var link = $(this);
        var section = $(link.attr('href'));
        if (section.position().top <= scrollPosition + 50 && section.position().top + section.height() > scrollPosition) {
          link.addClass('active');
        } else {
          link.removeClass('active');
        }
      });
    });
  
    // Toggle navbar on mobile devices
    $('.navbar-toggler').on('click', function() {
      $('.navbar-collapse').toggleClass('show');
    });
  
    // Animate hero section on scroll
    $(window).scroll(function() {
      var scrollPosition = $(window).scrollTop();
      if (scrollPosition > 500) {
        $('.hero-wrap').addClass('animate');
      } else {
        $('.hero-wrap').removeClass('animate');
      }
    });
  
    // Add animation to buttons on hover
    $('.btn-hero, .btn-about').on('mouseover', function() {
      $(this).addClass('animate');
    }).on('mouseout', function() {
      $(this).removeClass('animate');
    });
  });
  function toggleMenu() {
    var navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("active");
}
