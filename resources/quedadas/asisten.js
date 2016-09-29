var path = require('path'); var sequelize = require('../../ddbb');
var asistencia = require('../../models');
module.exports = function asistenQuedadaQuedadas(req,res,next) { 
      //console.log('asistenQuedada Quedadas - req= '+req); console.log('asistenQuedada Quedadas - req params id= '+req.params.id);
      var asistencia = sequelize.import(path.join(__dirname,'../../models/asistencia'));
      //console.log('asistenQuedadaQuedadas - id= '+req.params.id);
      asistencia.all({where: {id_quedada: req.params.id}}).then (function(asistencia) {
          if (asistencia) {
                //console.log('asistenQuedada Quedadas - aistencia = '+asistencia); 
                res.send(asistencia); next() }
          else throw new Error('Error: No hay asistenQuedada....')
      }).catch(function(error) {console.log('Error: function asistenQuedadaQuedadas - catch');next(error)})
};
