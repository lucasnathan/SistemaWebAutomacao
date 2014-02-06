/* App Controllers */
'use strict';

var app = angular.module('myApp.controllers', []);

app.controller('TvCtrl',  ['$scope', '$http', function ($scope, $http) {
    $scope.power = function () {
		$http({method: 'GET', url: '/tvpower', timeout: 2000}).
			success(function() {
				console.log('on/off');
			}).
			error(function() {
				console.log('error');
			});
    };
	
    $scope.volumeUp = function () {
		$http({method: 'GET', url: '/tvvolup', timeout: 2000}).
			success(function() {
				console.log('volume up');
			}).
			error(function() {
				console.log('error');
			});
    };
	
    $scope.volumeDown = function () {
		$http({method: 'GET', url: '/tvvoldown', timeout: 2000}).
			success(function() {
				console.log('volume down');
			}).
			error(function() {
				console.log('error');
			});
    };
	
    $scope.canalUp = function () {
		$http({method: 'GET', url: '/tvcanalup', timeout: 2000}).
			success(function() {
				console.log('canal up');
			}).
			error(function() {
				console.log('error');
			});
    };
	
    $scope.canalDown = function () {
		$http({method: 'GET', url: '/tvcanaldown', timeout: 2000}).
			success(function() {
				console.log('canal down');
			}).
			error(function() {
				console.log('error');
			});
    };
	
}]);

app.controller('LuzCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.powerOn = function () {
		$http({method: 'GET', url: '/lampon', timeout: 2000}).
			success(function() {
				console.log('on');
			}).
			error(function() {
				console.log('error');
			});
    };
	
    $scope.powerOff = function () {
		$http({method: 'GET', url: '/lampoff', timeout: 2000}).
			success(function() {
				console.log('off');
			}).
			error(function() {
				console.log('error');
			});
    };	
}]);

app.controller('ArCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.power = function () {
		$http({method: 'GET', url: '/arpower', timeout: 2000}).
			success(function() {
				console.log('liga/desliga ar');
			}).
			error(function() {
				console.log('error');
			});
    };

    $scope.arSobeTemp = function () {
		$http({method: 'GET', url: '/arsobetemp', timeout: 2000}).
			success(function() {
				console.log('ar aumentando temperatura');
			}).
			error(function() {
				console.log('error');
			});
    };

    $scope.arDescTemp = function () {
		$http({method: 'GET', url: '/ardescetemp', timeout: 2000}).
			success(function() {
				console.log('ar diminuindo temperatura');
			}).
			error(function() {
				console.log('error');
			});
    };	

    $scope.arAumentaVent = function () {
		$http({method: 'GET', url: '/araumentavent', timeout: 2000}).
			success(function() {
				console.log('ar aumentando a ventilação');
			}).
			error(function() {
				console.log('error');
			});
    };

    $scope.arDiminuiVent = function () {
		$http({method: 'GET', url: '/ardiminuivent', timeout: 2000}).
			success(function() {
				console.log('ar diminuindo ventilação');
			}).
			error(function() {
				console.log('error');
			});
    };

    $scope.arModoQuente = function () {
		$http({method: 'GET', url: '/armodoquente', timeout: 2000}).
			success(function() {
				console.log('modo quente ativado');
			}).
			error(function() {
				console.log('error');
			});
    };

    $scope.arModoVentilacao = function () {
		$http({method: 'GET', url: '/armodoventi', timeout: 2000}).
			success(function() {
				console.log('modo ventilação ativado');
			}).
			error(function() {
				console.log('error');
			});
    };

    $scope.arModoHumid = function () {
		$http({method: 'GET', url: '/armodohumid', timeout: 2000}).
			success(function() {
				console.log('modo humidificador ativado');
			}).
			error(function() {
				console.log('error');
			});
    };

    $scope.arModoSwing = function () {
		$http({method: 'GET', url: '/armodoswing', timeout: 2000}).
			success(function() {
				console.log('modo swing ativado');
			}).
			error(function() {
				console.log('error');
			});
    };


}]);