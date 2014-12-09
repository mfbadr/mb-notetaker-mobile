(function(){
  'use strict';
  angular.module('mb-notetaker-mobile')
    .controller('AccountCtrl', ['$scope', 'User', function($scope, User){
      $scope.user = {};
      $scope.login = function(user){
        console.log('user!', user);
        User.login(user).then(function(response){
          console.log('success!');
        }, function(response){
          console.log('error logging in');
        });
      };
    }]);
})();
