angular.module('audacyChallenge.roleModel', [])

  .factory('getData', function($http){
    var roleData = {};
    var privilegeData = {};

    var retrieveInfo = function(user){
      return $http({
        method: 'GET',
        url: '/api/roleInfo'
      })
      .then(function(responseData){
        console.log('in client recieved data', responseData)
      })
    };
    return{retrieveInfo:retrieveInfo}
  });