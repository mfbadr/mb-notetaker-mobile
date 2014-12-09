(function(){
  'use strict';
  angular.module('mb-notetaker-mobile')
    .controller('AccountCtrl', ['$scope', 'User', '$state', '$rootScope', function($scope, User, $state, $rootScope){
      $scope.user = {};
      $scope.login = function(user){
        console.log('user!', user);
        User.login(user).then(function(response){
          $rootScope.rootuser = response.data;
          $state.go('tab.dash');
        }, function(response){
          console.log('error logging in');
        });
      };
    }]);
})();
