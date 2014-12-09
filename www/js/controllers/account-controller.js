(function(){
  'use strict';
  angular.module('mb-notetaker-mobile')
    .controller('AccountCtrl', ['$scope', 'User', '$state', function($scope, User, $state){
      $scope.user = {};
      $scope.login = function(user){
        console.log('user!', user);
        User.login(user).then(function(response){
          $state.go('tab.dash');
          console.log('success!');
        }, function(response){
          console.log('error logging in');
        });
      };
    }]);
})();
