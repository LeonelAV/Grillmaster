angular.module('grillmaster')
  .factory('apiService', function($http){
    
    function getGrillItems() {
      var urlItems = 'data/grill.xml'
      return $http.get(urlItems)
        .then(response => response.data.results)
    }

    return {
      getGrillItems: getGrillItems
    }
})