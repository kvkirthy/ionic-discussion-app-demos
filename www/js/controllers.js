angular.module('starter.controllers', [])

.controller('currentDiscussionsController', ['$scope', 'firebaseDataSource', function($scope, chats) {
  $scope.chats = chats.all();
}])

.controller('discussionDetailsController', ["$scope", "$state", "$stateParams", "firebaseDataSource",function($scope, $state, $stateParams, chats) {
  $scope.chat = chats.get($stateParams.chatId);
  $scope.isArchive = $state.$current.name === "tab.discussion-detail"
  
  $scope.addComment = function(keyEvent) {
      if($scope.chat.comments && $scope.chat.comments.length && $scope.chat.comments.push){       
          $scope.chat.comments.push(this.userComment);      
          chats.save($scope.chat);
          this.userComment = "";
      }
  };
}])
;
