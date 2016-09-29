var path = require('path'); var sequelize = require('../../ddbb');
var quedada = require('../../models');
module.exports = function fotoQuedadaQuedadas(req,res,next) { 
      //console.log('fotoQuedada Quedadas - req= '+req); console.log('fotoQuedada Quedadas - req params id= '+req.params.id);
      var quedada = sequelize.import(path.join(__dirname,'../../models/quedada'));
      //console.log('fotoQuedadaQuedadas - id= '+req.params.id);
      quedada.findOne({where: {id: req.params.id}}).then (function(quedada) {
          if (quedada) {res.send(quedada.foto); next() }
          else throw new Error('Error: No hay fotoQuedada....')
      }).catch(function(error) {console.log('Error: function fotoQuedadaQuedadas - catch');next(error)})
};
