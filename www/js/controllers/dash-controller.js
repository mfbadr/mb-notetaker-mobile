(function(){
  'use strict';
  angular.module('mb-notetaker-mobile')
    .controller('DashCtrl', ['$scope', 'Note', 'User', '$rootScope', '$state', function($scope, Note, User, $rootScope, $state){

      if($rootScope.rootuser){
        Note.count().then(function(response){
          $scope.count = response.data.count;
        }, function(response){
          console.log('error getting count');
        });
      }

      $scope.logout = function(){
        User.logout().then(function(respose){
          console.log('logged out');
          $rootScope.rootuser = null;
          $state.go('tab.account');
        });
      };

    }]);
})();
