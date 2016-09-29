var path = require('path'); var sequelize = require('../../ddbb');
var quedada = require('../../models');
var fs = require('fs');
var lqa=0;
module.exports = function main(req,res,next) { //console.log('main - req= '+req);
   //   ---- Encuentra la primera quedada disponible ------------
   var quedada = sequelize.import(path.join(__dirname,'../../models/quedada'));
   //console.log('quedadaQuedadas - id= '+req.params.id);
   quedada.findOne().then (function(quedada) {
          if (quedada) {lqa=quedada.id; 
             fs.readFile('index.html', function(err,data,next) {
                if (err) {err.statusCode = 404; next(err)
                } else {
                  var replacedData=data.toString().replace('lqa=0','lqa='+lqa);
                  //console.log('main - replaced data= '+replacedData);
                  res.writeHead(200, {'Content-Type':'text/html','Content-Length': data.length});
                  res.write(replacedData);
                  res.end();
                  next(); }})
          } else throw new Error('Error: No hay quedada....')

   }).catch(function(error) {console.log('Error: function main - encontrando la primera quedada disponible - catch');next(error)})
}


