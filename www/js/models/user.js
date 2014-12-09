(function(){
  'use strict';

  angular.module('mb-notetaker-mobile')
    .factory('User', ['$http', function($http){

      function login(user){
        return $http.post('http://localhost:8000/login', user);
      }

      return {login:login};
    }]);
})();
