var app = require('./server/server.js');

app.listen(app.get('port'), function() {
  console.log('server for audacyCodingChallenge is running');
});
