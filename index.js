var assert = require('assert');
var server = require('./server');
var ddbb = require('./ddbb');

//console.log("index.js - server address = "+server.address().address);
var port = Number(process.env.SERVER_PORT) || 8080; assert(port);
assert(server.listen(port, function() {console.log('Quedadas REST API sever listening on port= '+port)}));
