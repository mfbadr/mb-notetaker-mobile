(function(){
  'use strict';

  angular.module('mb-notetaker-mobile')
    .factory('Note', ['$http', function($http){

      function count(user){
        return $http.get('http://localhost:8000/notes/count');
      }

      return {count:count};
    }]);
})();
