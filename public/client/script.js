var audacyChallenge = angular.module('audacyChallenge', []);
audacyChallenge.controller('audacyCtrl', ['$scope',
  function($scope) {
    $scope.greeting = { text: 'Hello' };
}]);