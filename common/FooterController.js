(function() {
'use strict';

/**
 * Footer Controller
 */
angular
  .module('myapp')
  	.controller('FooterController', Controller);

Controller.$inject = [
  'AppConstants'
];

function Controller(AppConstants) {
	
  var vm = this;

	vm.siteName = AppConstants.SiteName;
	vm.siteVersion = AppConstants.SiteVersion;
}

})();