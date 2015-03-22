(function() {
'use strict';

/**
 * App Controller
 */
angular
  .module('myapp')
  .controller('MainController', Controller);


Controller.$inject = [
  '$router',
  '$location'
];

function Controller($router, $location) {
  $router.config([
    { path: '/home', component: 'home' },
    { path: '/notes', component: 'notes' },
    { path: '/about', component: 'about' },
    { path: '/faq', component: 'faq' },
    { path: '/privacy', component: 'privacy' },
    { path: '/terms', component: 'terms' },
    { path: '/', redirectTo: '/home' }
  ]);
  $location.path('/'); //set default otherwise is blank
}

})();