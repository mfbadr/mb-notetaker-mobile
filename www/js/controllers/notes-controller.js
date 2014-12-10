(function(){
  'use strict';
  angular.module('mb-notetaker-mobile')
    .controller('NotesCtrl', ['$scope', 'Note', 'User', '$rootScope', '$state', function($scope, Note, User, $rootScope, $state){

      $scope.title = 'connected';

      if($rootScope.rootuser){
        Note.list('%').then(function(response){
          //debugger;
          $scope.notes = response.data;
        }, function(response){
          console.log('error getting your notes');
        });
      }

    }]);
})();
