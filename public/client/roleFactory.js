angular.module('audacyChallenge.roleFactory', [])

  .factory('getData', function($http){
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