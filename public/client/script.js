var audacyChallenge = angular.module('audacyChallenge', []);


audacyChallenge.controller('audacyCtrl', ['$scope',
  function($scope) {
    $scope.greeting = { text: 'Hello' };
}]);


audacyChallenge.factory('getData', function($http){
    var roleData = {};
    var privilegeData = {};
    //TODO does retrieveInfo need to be passed an argument (client id?)
    var retrieveInfo = function(){
      return $http({
        method: 'GET',
        url: '/api/roleInfo'
      })
      .then(function(responseData){
        console.log('in client recieved data', responseData)
      })
    };
    return {retrieveInfo:retrieveInfo}
  });

audacyChallenge.controller('roleDataController', ['$scope', 'getData',  function($scope, getData){
    
    $scope.getRoleData = getData.retrieveInfo;
    $scope.getRoleInfo = function(){
      console.log('in getRoleInfo in roleDataController')
      $scope.getRoleData().then(function(response){
        console.log('in role data controller', response)
      })
    }; 

  }]);