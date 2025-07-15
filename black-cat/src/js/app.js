import ready, { HTML } from 'Utils';
import initMobileNav from './components/mobileNav';

ready(() => {
  HTML.classList.add('is-loaded');
  initMobileNav('.nav-opener', 'nav-active');
});

// jQuery document ready
// jQuery(function() {
//   // init functions
// });

// vanilla document ready
// document.addEventListener('DOMContentLoaded', function () {
//   // do something here ...
// }, false);
