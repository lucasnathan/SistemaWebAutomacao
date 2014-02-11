/* App Controllers */
'use strict';

var app = angular.module('myApp.controllers', []);


//sendRequestService comes from services.js file, where this is a module of this app....
app.controller('Control', ['$scope', 'sendRequestService', function ($scope, sendRequestService) {

	$scope.sendAction = function(URL){
		sendRequestService.sendRequest(URL);
	}
}]);