(function(){
  'use strict';
  angular.module('mb-notetaker-mobile')
    .controller('NoteDetailCtrl', ['$scope', 'Note', 'User', '$rootScope', '$state', function($scope, Note, User, $rootScope, $state){

      var noteId = $state.params.noteId;
      Note.findOne(noteId).then(function(response){
        $scope.note = response.data[0];
      }, function(response){
          console.log('something went wrong', response);
      });

    }]);
})();
