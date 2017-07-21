var app = angular.module('madLib');

app.config(function($routeProvider) {

  $routeProvider
    .when('/input', {
      controller: 'inputCtrl',
      templateUrl: 'partials/input.html'
    })
    .when('/display', {
      controller: 'displayCtrl',
      templateUrl: 'partials/display.html'
    })
    .otherwise({ redirectTo: '/input' })

});
