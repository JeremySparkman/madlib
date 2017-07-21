var app = angular.module('madLib');

app.controller('displayCtrl', function($scope, storyFactory) {

  $scope.story = storyFactory.getStory();


});
