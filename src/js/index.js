$ = jQuery = require('jquery');
global.Tether = require('tether');
global.Popper = require('popper.js');
require('bootstrap');
require('../../dist/js/parallax.min.js');

$(function () {
  $('.parallax-skillset').parallax({
    imageSrc: 'dist/img/skillset-bg.jpg'
  });
  $('.parallax-home').parallax({
    imageSrc: 'dist/img/main-banner.jpg'
  });
  $('.parallax-contact').parallax({
    imageSrc: 'dist/img/contact-bg.jpg'
  });

  $('#burger-menu').click(function () {
    $(this).toggleClass('open');
  });

  var oTop = $('#skillset').offset().top - window.innerHeight;
  var pTop = $('body').scrollTop();
  if (pTop > oTop) {
    $('.progress-bar').removeClass('animated fadeInLeft');
    $('.progress-bar').addClass('animated fadeInLeft');
  } else {
    $(window).scroll(function () {
      var pTop = $('body').scrollTop();
      if (pTop > oTop) {
        $('.progress-bar').removeClass('animated fadeInLeft');
        $('.progress-bar').addClass('animated fadeInLeft');
      }
    });
  }

  $(document).on('click', 'a', function (event) {
    if ($(this).hasClass("self-link")) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
      }, 500);
    }
  });

  $(".skillset-text .hide-button").on("click", function(){
    $(this).parent().hide().next().show().addClass('animated pulse');
  });
});