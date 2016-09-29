var path = require('path'); var sequelize = require('../../ddbb');
var quedada = require('../../models');
module.exports = function sitioQuedadaQuedadas(req,res,next) { 
      //console.log('sitioQuedada Quedadas - req= '+req); console.log('sitioQuedada Quedadas - req params id= '+req.params.id);
      var quedada = sequelize.import(path.join(__dirname,'../../models/quedada'));
      //console.log('sitioQuedadaQuedadas - id= '+req.params.id);
      quedada.findOne({where: {id: req.params.id}}).then (function(quedada) {
          if (quedada) {res.send(String(quedada.id_sitio)); next() }
          else throw new Error('Error: No hay sitioQuedada....')
      }).catch(function(error) {console.log('Error: function sitioQuedadaQuedadas - catch');next(error)})
};
