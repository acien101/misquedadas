var restify = require('restify');
var bunyan = require('bunyan');
var options = {name: "Quedadas API"};
var server = restify.createServer(options);

server.pre(restify.pre.sanitizePath());
//
//server.use(function(req,res,next){console.log('middleware 1 here',req.body);next();});
server.use(restify.queryParser());
server.use(restify.bodyParser({maxBodySize: 10 * 1024}));
//server.use(function(req,res,next){console.log('middleware 2 here',req.body);next();});
server.on('after', restify.auditLogger({log: bunyan.createLogger({name: 'misquedadas log', stream: process.stdout })}));
module.exports = server;
require('./routes');
