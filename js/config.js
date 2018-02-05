angular.module('grillmaster')
  .config(function($routeProvider, $locationProvider){
    $routeProvider
      .when('/', {
        templateUrl: 'templates/home.html',
        controller:'homeController'
      })
  })