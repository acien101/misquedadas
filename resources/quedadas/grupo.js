var path = require('path'); var sequelize = require('../../ddbb');
var quedada = require('../../models');
module.exports = function grupoQuedadaQuedadas(req,res,next) { 
      //console.log('grupoQuedada Quedadas - req= '+req); console.log('grupoQuedada Quedadas - req params id= '+req.params.id);
      var quedada = sequelize.import(path.join(__dirname,'../../models/quedada'));
      //console.log('grupoQuedadaQuedadas - id= '+req.params.id);
      quedada.findOne({where: {id: req.params.id}}).then (function(quedada) {
          if (quedada) {res.send(quedada.nombre_grupo); next() }
          else throw new Error('Error: No hay grupoQuedada....')
      }).catch(function(error) {console.log('Error: function grupoQuedadaQuedadas - catch');next(error)})
};
