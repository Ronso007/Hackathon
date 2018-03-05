var myAppModule = angular.module('myApp', ["ngRoute"]);
var LoginModule = angular.module('Login', []);

myAppModule.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/Profile', {
        templateUrl: 'Routes/Profile.html',
        controller: 'profileController'
      }).
      when('/Map', {
        templateUrl: 'Routes/Map.html',
        controller: 'mapController'
      }).
      when('/List', {
          templateUrl: '../views/Routes/Map.html'
          //controller: 'mapController'
      }).
      when('/Settings', {
        templateUrl: '../views/Routes/Settings.html',
        controller: 'settingsController'
      }).
      when('/Contact', {
          templateUrl: '../views/Routes/Contact.html'
      }).
      otherwise({
        redirectTo: '/Profile'
      });
  }]);


