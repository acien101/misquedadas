var path = require('path'); var sequelize = require('../../ddbb');
var asistencia = require('../../models');
module.exports = function listAsistencia(req,res,next) { 
      var asistencia = sequelize.import(path.join(__dirname,'../../models/asistencia'));
      asistencia.all().then (function(asistencia) {
          if (asistencia) {res.send(asistencia); next() }
          else throw new Error('Error: No hay asistencia....')
      }).catch(function(error) {console.log('Error: function listAsistencias - catch');next(error)})
};
