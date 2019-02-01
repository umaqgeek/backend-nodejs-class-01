// var appView = require('./views/businessView');
var appConn = require('./controllers/drugs');

appConn.listen(8081, function() {
   console.log('Server started');
});
