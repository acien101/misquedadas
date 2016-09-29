var fs = require('fs');
module.exports = function css(req,res,next) {
   //console.log('/css - file= '+'./css/'+req.params.file);
   fs.readFile('./css/'+req.params.file, function(err,data,next) {
      if (err) {err.statusCode = 404; next(err)} else {
        res.writeHead(200, {'Content-Type':'text/css','Content-Length': data.length});
        res.write(data);
        res.end();
        next();
   }})
}


