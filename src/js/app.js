// import $ from 'jquery';
import '../js/link-smooth-scroll.js';
import SmoothScroll from 'smoothscroll-for-websites';
import Rellax from 'rellax';


SmoothScroll({ 
  stepSize: 50,
  accelerationDelta: 100,
  accelerationMax: 10
});

var rellax = new Rellax('.cor-parralax-rellax', {
  speed: 5,
  center: false,
  round: true,
  vertical: true,
  horizontal: false
});

