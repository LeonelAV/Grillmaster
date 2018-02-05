angular.module('grillmaster')
  .controller('homeController', function($scope, $window, $rootScope, $location, apiService) {
      
    $scope.init = function () {
      
    }

    $scope.getRemainItems = function() {
      $location.path('/remainItems')
    }

    })


