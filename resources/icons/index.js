var fs = require('fs');
module.exports = function icons(req,res,next) {
   //console.log('/icons - file= '+'./icons/'+req.params.file);
   fs.readFile('./icons/'+req.params.file, function(err,data,next) {
      if (err) {err.statusCode = 404; next(err)} else {
        res.writeHead(200, {'Content-Type':'image/jpeg','Content-Length': data.length});
        res.write(data);
        res.end();
        next();
   }})
}


