var path = require('path'); var sequelize = require('../../ddbb');
var quedada = require('../../models');
module.exports = function peniaQuedadaQuedadas(req,res,next) { 
      //console.log('peniaQuedada Quedadas - req= '+req); console.log('peniaQuedada Quedadas - req params id= '+req.params.id);
      var quedada = sequelize.import(path.join(__dirname,'../../models/quedada'));
      //console.log('peniaQuedadaQuedadas - id= '+req.params.id);
      quedada.findOne({where: {id: req.params.id}}).then (function(quedada) {
          if (quedada) {res.send(quedada.nombre_peña); next() }
          else throw new Error('Error: No hay peniaQuedada....')
      }).catch(function(error) {console.log('Error: function peniaQuedadaQuedadas - catch');next(error)})
};
