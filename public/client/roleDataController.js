angular.module('audacyChallenge.roleDataController', [])
  
  .controller('roleDataController', ['scope', function($scope, getData){
    $scope.getRoleData = getData.retrieveInfo;
    $scope.getRoleInfo = function(){
      console.log('in getRoleInfo in roleDataController')
      $scope.getRoleData(res).then(function(response){
        console.log('in role data controller', response)
      })
    }; 
  }]); 