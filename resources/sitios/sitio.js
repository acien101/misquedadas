var path = require('path'); var sequelize = require('../../ddbb');
var sitio = require('../../models');
module.exports = function sitioSitios(req,res,next) { 
      //console.log('sitioSitios  - req= '+req); console.log('sitioSitios  - req params id= '+req.params.id);
      var sitio = sequelize.import(path.join(__dirname,'../../models/sitio'));
      //console.log('sitioSitios - nombre= '+req.params.id);
      sitio.findOne({where: {id: req.params.id}}).then (function(sitio) {
          if (sitio) {res.send(sitio); next() }
          else throw new Error('Error: No hay sitio....')
      }).catch(function(error) {console.log('Error: function sitioSitios - catch');next(error)})
};
