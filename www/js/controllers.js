angular.module('starter.controllers', [])

.controller('currentDiscussionsController', ['$scope', 'firebaseDataSource', function($scope, chats) {
  $scope.chats = chats.all();
}])

.controller('discussionDetailsController', ["$scope", "$stateParams", "firebaseDataSource",function($scope, $stateParams, chats) {
  $scope.chat = chats.get($stateParams.chatId);
  
  $scope.addComment = function(keyEvent) {
      if($scope.chat.comments && $scope.chat.comments.length && $scope.chat.comments.push){       
          $scope.chat.comments.push(this.userComment);      
          chats.save($scope.chat);
          this.userComment = "";
      }
  };
}])
;
