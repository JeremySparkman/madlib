var app = angular.module('madLib');

app.controller('inputCtrl', function($scope, storyFactory, $location) {

  $scope.submitStory = function(storyObj) {
    storyFactory.createStory(storyObj);
    $location.path('/display');
  };

});
