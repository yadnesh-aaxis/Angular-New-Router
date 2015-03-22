angular
  .module('myapp', [
    'ngNewRouter',
    'myapp.home',
    'myapp.notes',
    'myapp.about'
  ]);



angular
  .module('myapp')
    .config(function ($componentLoaderProvider) {
      $componentLoaderProvider.setTemplateMapping(function (name) {
        // name is component name
        return 'components/' + name + '/' + name + '.tpl.html';
      });
    });




angular
  .module('myapp')
    .constant('AppConstants', {
        'SiteName': 'AnnotatedJS Demo App',
        'SiteVersion': '1.0'});