(function(){
  'use strict';
  angular.module('mb-notetaker-mobile')
    .controller('DashCtrl', ['$scope', 'Note', '$rootScope', function($scope, Note, $rootScope){

      Note.count().then(function(response){
        $scope.count = response.data.count;
      }, function(response){
        console.log('error getting count');
      });

    }]);
})();
