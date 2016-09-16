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
      .then(function(response){
        var data = {};
        console.log('in client recieved data', response)
        var roles = response.items
        for(var i=0; i<roles.length; i++){
          var currRole = roles[i];
          var roleName = currRole.roleName;
          var rolePrivilges = currRole.rolePrivileges;
          var privileges = [];
          for(var j=0; j<rolePrivilges.length; j++){
            privileges.push(rolePrivilges[j].privilegeName)
          }
          data[roleName] = privileges;
          //console.log(i, 'roleName', roleName, 'rolePrivilges', rolePrivilges)
        }
      })
    };
    return {retrieveInfo:retrieveInfo, data:data}
  });



