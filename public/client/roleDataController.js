angular.module('audacyChallenge.roleDataController', [])
  .controller('roleDataController', function($scope, getData)){
    $scope.getRoleInfo = getData.retrieveRoleInfo;
    
  }