var fs = require('fs');
module.exports = function lqa(req,res,next) {
   //console.log('lqa - req= '+req);  console.log('lqa - req params id= '+req.params.id);
   fs.readFile('index.html', function(err,data,next) {
      if (err) {err.statusCode = 404; next(err)} else {
        //console.log('lqa - data= '+data); 
        var replacedData=data.toString().replace('lqa=0','lqa='+req.params.id);
        //console.log('lqa - replaced data= '+replacedData); 
        res.writeHead(200, {'Content-Type':'text/html','Content-Length': data.length});
        res.write(replacedData);
        res.end();
        next();
   }})
}


