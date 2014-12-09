angular.module('mb-notetaker-mobile')
.controller('AccountCtrl', function($scope){
  'use strict';
  $scope.user = {};
  $scope.login = function(user){
      console.log('user', user);
  };
});
