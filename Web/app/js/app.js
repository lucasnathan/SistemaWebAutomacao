'use strict';


// Declare app level module which depends on filters, and services
var app = angular.module('myApp', [
  'ngRoute',
  'myApp.services',
  'myApp.controllers']);
  
app.config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider) {
	$routeProvider.when('/tv' , {templateUrl: 'views/tv.html', controller: 'Control'});
	$routeProvider.when('/ar' , {templateUrl: 'views/ar.html', controller: 'Control'});
	$routeProvider.when('/luz', {templateUrl: 'views/luz.html',controller: 'Control'});  
	$routeProvider.otherwise({redirectTo: '/tv'});
}]);