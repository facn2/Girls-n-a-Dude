const app = require('./app');

app.listen(app.get('port'), () => {
  console.log('Girls n-a Dude running on port: ', app.get('port'));
});
