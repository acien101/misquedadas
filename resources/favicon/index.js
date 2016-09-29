var fs = require('fs');
module.exports = function favicon(req,res,next) {
   fs.readFile('favicon.ico', function(err,data,next) {
      if (err) {err.statusCode = 404; next(err)} else {
        res.writeHead(200, {'Content-Type':'image/x-icon','Content-Length': data.length});
        res.write(data);
        res.end();
        next();
   }})
}


