import $ from 'jquery';
import '../js/link-smooth-scroll.js';
import SmoothScroll from 'smoothscroll-for-websites';
import Rellax from 'rellax';
import slick from 'slick-carousel';


SmoothScroll({ 
  stepSize: 50,
  accelerationDelta: 100,
  accelerationMax: 10
});

var rellax = new Rellax('.cor-parralax_top .cor-parralax-rellax', {
  speed: 2
});

var rellax1 = new Rellax('.cor-parralax_bottom .cor-parralax-rellax', {
  speed: 4
});

$('.slider-reviews').slick({
  // slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  centerMode: true,
  variableWidth: true,
  speed: 0,
  focusOnSelect: true
});

