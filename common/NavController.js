(function() {
'use strict';

/**
 * Nav Controller
 */
angular
  .module('myapp')
  .controller('NavController', Controller);

Controller.$inject = [
  '$location',
  'AppConstants'
];

function Controller($location, AppConstants) {
  var vm = this;

  vm.isCollapsed = false; // ui-bootstrap: collapse

	vm.siteName = AppConstants.SiteName;
	vm.siteVersion = AppConstants.SiteVersion;

  vm.isActive = isActive;
  
  function isActive(route){
    return route === $location.path();
  }
}

})();