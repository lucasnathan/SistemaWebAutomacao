'use stricts';

var app = angular.module('myApp.services',[]);

app.service('sendRequestService', ['$http', function($http){
    
    this.sendRequest = function(URL){
        console.log("Service URL: " + URL);

	    $http({method: 'GET', url: URL, timeout: 2000}).
			success(function() {
				console.log('Success: '+ URL);
			}).
			error(function() {
				console.log('Error: '+ URL);
			});
	};
}]);