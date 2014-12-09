(function(){
  'use strict';
  angular.module('mb-notetaker-mobile')
    .controller('DashCtrl', ['$scope', 'Note', '$state', function($scope, Note, $state){
      Note.count().then(function(response){
        debugger;
      }, function(response){
        debugger;
      });
    }]);
})();
