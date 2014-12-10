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

      function success(b64){
        console.log(b64);
      }
      function error(msg){
        console.log(msg);
      }

      $scope.snap = function(){
        var options = {
          quality: 100,
          destinationType: Camera.DestinationType.DATA_URL
        };
        navigator.camera.getPicture(success, error, options);
      };

      $scope.choose = function(){
        var options = {
          quality: 100,
          sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
          destinationType: Camera.DestinationType.DATA_URL
        };
        navigator.camera.getPicture(success, error, options);
      };


    }]);
})();
