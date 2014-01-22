/* http://docs.angularjs.org/#!angular.service */

/**
 * App service which is responsible for the main configuration of the app.
 */
angular.service('AngularBottleApp', function($route, $window) {

  $route.when('/tv'    , {template: 'partials/tv.html', controller: TvCtrl });
  $route.when('/ar', {template: 'partials/ar_condicionado.html', controller: ArCtrl });
  $route.when('/luz'    , {template: 'partials/luz.html', controller: LuzCtrl });
  $route.otherwise({redirectTo: '/tv'});

  var self = this;

  self.$on('$afterRouteChange', function(){
    $window.scrollTo(0,0);
  });

},
{
	$inject:['$route', '$window'], 
	$eager: true
});
