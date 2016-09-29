var path = require('path'); var sequelize = require('../../ddbb');
var sitio = require('../../models');
module.exports = function geolocalizacionSitios(req,res,next) { 
      //console.log('geolocalizacionSitios  - req= '+req);
      //console.log('geolocalizacionSitios  - req params id= '+req.params.id);
      var sitio = sequelize.import(path.join(__dirname,'../../models/sitio'));
      //console.log('geolocalizacionSitios - nombre= '+req.params.id);
      sitio.findOne({where: {id: req.params.id}}).then (function(sitio) {
          if (sitio) {res.send(sitio.geolocalizacion); next() }
          else throw new Error('Error: No hay geolocalizacion....')
      }).catch(function(error) {console.log('Error: function geolocalizacionSitios - catch');next(error)})
};
