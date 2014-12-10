(function(){
  'use strict';

  angular.module('mb-notetaker-mobile')
    .factory('Note', ['$http', 'origin', function($http, origin){

      function count(user){
        return $http.get(origin + '/notes/count');
      }

      function list(tag, page){
        page = page | 0;
        return $http.get(origin + '/notes?limit=10&offset=' + 5 * page + '&tag=' + tag);
      }

      function findOne(noteId){
        return $http.get(origin + '/notes/' + noteId);
      }

      function upload(noteId, b64){
        return $http.post(origin + '/mobileupload', {noteId:noteId, b64:b64});
      }

      return {count:count, list:list, findOne:findOne, upload:upload};
    }]);
})();
