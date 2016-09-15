var controller = require('./controller.js')

module.exports = function(app){
  app.get('/roleInfo', controller.getRoleInfo);
};