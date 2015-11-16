angular.module('starter.controllers', [])

.controller('currentDiscussionsController', function($scope, chats) {
  $scope.chats = chats.all();

})

.controller('archiveDiscussionsController', function($scope, chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = chats.all();

})

.controller('discussionDetailsController', function($scope, $stateParams, chats) {
  $scope.chat = chats.get($stateParams.chatId);
  
  $scope.addComment = function(keyEvent) {
      if($scope.chat.comments && $scope.chat.comments.length && $scope.chat.comments.push){       
          $scope.chat.comments.push(this.userComment);          
          this.userComment = "";
      }
  };
})
;
