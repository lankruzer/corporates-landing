// import $ from 'jquery';
import '../js/link-smooth-scroll.js';
import SmoothScroll from 'smoothscroll-for-websites';
import Rellax from 'rellax';


SmoothScroll({ 
  stepSize: 50,
  accelerationDelta: 100,
  accelerationMax: 10
});

var rellax = new Rellax('.cor-parralax_top .cor-parralax-rellax', {
  // wrapper: '.cor-parralax_top',
  speed: 2,
  // center: true,
  // round: true,
  // vertical: true,
  // horizontal: false
});

var rellax1 = new Rellax('.cor-parralax_bottom .cor-parralax-rellax', {
  // wrapper: '.cor-parralax_bottom',
  speed: 4,
  // center: false,
  // round: true,
  // vertical: true,
  // horizontal: false
});

