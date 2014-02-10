'use strict';


// Declare app level module which depends on filters, and services
var app = angular.module('myApp', [
  'ngRoute',
  'myApp.controllers']);
  
app.config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider) {
	$routeProvider.when('/tv' , {templateUrl: 'views/tv.html', controller: 'TvCtrl'});
	$routeProvider.when('/ar' , {templateUrl: 'views/ar.html', controller: 'ArCtrl'});
	$routeProvider.when('/luz', {templateUrl: 'views/luz.html',controller: 'LuzCtrl'});  
	$routeProvider.otherwise({redirectTo: '/tv'});

	//Enable cross domain calls
  $httpProvider.defaults.useXDomain = true;

  //Remove the header containing XMLHttpRequest used to identify ajax call 
  //that would prevent CORS from working
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
}]);