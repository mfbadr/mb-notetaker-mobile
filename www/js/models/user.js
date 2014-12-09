(function(){
  'use strict';

  angular.module('mb-notetaker-mobile')
    .factory('User', ['$http', function($http){

      function login(user){
        return $http.post('http://localhost:8000/login', user);
      }

      function logout(){
        return $http.delete('http://localhost:8000/logout');
      }

      return {login:login, logout:logout};
    }]);
})();
