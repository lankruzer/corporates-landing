import $ from 'jquery';
import '../js/link-smooth-scroll.js';
import SmoothScroll from 'smoothscroll-for-websites';
import Rellax from 'rellax';
import slick from 'slick-carousel';
import '../js/popups.js';
import Inputmask from 'inputmask';
import datepicker from 'air-datepicker';

// smooth scroll
SmoothScroll({ 
  stepSize: 50,
  accelerationDelta: 100,
  accelerationMax: 10
});

// parallax top
new Rellax('.cor-parralax_top .cor-parralax-rellax', {
  speed: 2
});

//parallax bottom
new Rellax('.cor-parralax_bottom .cor-parralax-rellax', {
  speed: 4
});

//slider reviews
$('.slider-reviews').slick({
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  centerMode: true,
  variableWidth: true,
  speed: 0,
  focusOnSelect: true,
  autoplay: true,
  autoplaySpeed: 7500,
  responsive: [
    {
      breakpoint: 700,
      settings: {
        variableWidth: false,
        slidesToShow: 1,
        centerMode: false,
        speed: 300,
      }
    }
  ]
});

// yandeks map
$(document).ready(function() {

  var myMap;
  ymaps.ready(init);

  function init() {
    myMap = new ymaps.Map('map', {
      center: [53.902496, 27.561481],
      zoom: 10,
      controls: []
    }, {
      searchControlProvider: 'yandex#search'
    }),
    myMap.geoObjects
      .add(new ymaps.Placemark([53.902496, 27.561481], {
        balloonContent: 'Адрес компании'
      }, {
        iconColor: 'red'
      })); 
  }
});

// inputmask
var selectors = document.querySelectorAll('input[type=tel]');
var im = new Inputmask('+375(99)-999-99-99');
selectors.forEach( function(element, index) {
  im.mask(element);
});

// datapicker
$('.input-date').datepicker({
  inline: true,
  position: 'right top'
});


// fixed header
if (document.querySelector('.hero')) {
  var firstScreenHeightPerc = $('.hero').height() / 10 * 5;
  var header = $('.header');
  var oldScrolled = $(window).scrollTop();
  var scrolled = oldScrolled;
   
  $(window).scroll(function(event) {
  	scrolled = $(window).scrollTop();

    if ($(window).scrollTop() > firstScreenHeightPerc) {
      	if (!$(header).hasClass('is-hide')) {
      		$(header).addClass('is-hide');
      	}
    } else if ($(header).hasClass('is-hide')) {
      	$(header).removeClass('is-hide');
    }

    if (scrolled < oldScrolled) {
	    if ($(header).hasClass('is-hide')) {
	      	$(header).removeClass('is-hide');
	    }    	
    }

    oldScrolled = scrolled;   
  });
}

//mobile-menu
$('.btn-mobile-menu').click(function() {
  $('body').toggleClass('is-hide-scroll');
  $(this).toggleClass('is-active');
  $('.mobile-menu').toggleClass('is-show');
});
