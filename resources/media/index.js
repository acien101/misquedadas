var fs = require('fs');
module.exports = function media(req,res,next) {
   //console.log('/media - file= '+'./media/'+req.params.file);
   fs.readFile('./media/'+req.params.file, function(err,data,next) {
      if (err) {err.statusCode = 404; next(err)} else {
        res.writeHead(200, {'Content-Type':'image/jpeg','Content-Length': data.length});
        res.write(data);
        res.end();
        next();
   }})
}


