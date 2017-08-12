$ = jQuery = require('jquery');
global.Tether = require('tether');
global.Popper = require('popper.js');
require('bootstrap');
require('../../dist/js/parallax.min.js');

$(function(){
    $('.parallax-skillset').parallax({imageSrc: 'dist/img/skillset-bg.jpg'});
    $('.parallax-home').parallax({imageSrc: 'dist/img/main-banner.jpg'});
    $('.parallax-contact').parallax({imageSrc: 'dist/img/contact-bg.jpg'});
});
