var fs = require('fs');
module.exports = function js(req,res,next) {
   //console.log('/js - file= '+'./js/'+req.params.file);
   fs.readFile('./js/'+req.params.file, function(err,data,next) {
      if (err) {err.statusCode = 404; next(err)} else {
        res.writeHead(200, {'Content-Type':'text/javascript','Content-Length': data.length});
        res.write(data);
        res.end();
        next();
   }})
}


