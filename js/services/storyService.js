var app = angular.module('madLib');

app.factory('storyFactory', function() {

  var story = {};

  return {
    createStory: createStory,
    getStory: getStory,
  }

  function createStory(storyObj) {
    story = storyObj;
  }

  function getStory() {
    return story;
  }

});
