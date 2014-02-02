/* App Controllers */
'use strict';

var app = angular.module('myApp.controllers', []);

app.controller('TvCtrl',  ['$scope', '$http', function ($scope, $http) {
	
	this.canal = 0;
    $scope.power = function () {
        $http.get("http://localhost:8888/tv/1/power/on").success(function () {});
    };
	$scope.trocaCanal = function () {
        $http.get("http://localhost:8888/tv/1/trocacanal/"+ this.canal).success(function () {});
    };
	
	$scope.trocaVolumeUp = function () {		
        $http.get("http://localhost:8888/tv/1/volume/up").success(function () {});
    };
	
	$scope.trocaVolumeDown = function () {
        $http.get("http://localhost:8888/tv/1/volume/down").success(function () {});
    };	
	
	$scope.trocaCanalUp = function () {		
        $http.get("http://localhost:8888/tv/1/canal/up").success(function () {});
    };
	
	$scope.trocaCanalDown = function () {
        $http.get("http://localhost:8888/tv/1/canal/down").success(function () {});
    };		
}]);

app.controller('LuzCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.power = function () {
        $http.get("http://localhost:8888/lamp/1/1").success(function () {
			alert('Ok');
		});
    }
}]);

app.controller('ArCtrl', ['$scope', '$http', function ($scope, $http) {
	this.status = 'on'
    $scope.power = function () {
        $http.get("http://localhost:8888/ar/power/"+ this.status).success(function () {
			alert('Ok');
		});
    }	
}]);