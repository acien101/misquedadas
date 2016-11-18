var path = require('path'); var sequelize = require('../../ddbb');
var pertenencia = require('../../models');
module.exports = function listPertenencia(req,res,next) { 
      var pertenencia = sequelize.import(path.join(__dirname,'../../models/pertenencia'));
      pertenencia.all({where: {nombre: req.params.nombre}}).then (function(pertenencia) {
          if (pertenencia) {res.send(pertenencia); next() }
          else throw new Error('Error: No hay pertenencia....')
      }).catch(function(error) {console.log('Error: function listPertenencias - catch');next(error)})
};
