var path = require('path'); var sequelize = require('../../ddbb');
var asistencia = require('../../models');
module.exports = function noasisisteAsistencia(req,res,next) { 
      //console.log('noasiste Asistencia - req= '+req); 
      //console.log('noasiste Asistencia - req params idq= '+req.params.idq);
      //console.log('noasiste Asistencia - req params idg= '+req.params.idg);
      var asistencia = sequelize.import(path.join(__dirname,'../../models/asistencia'));
      asistencia.findOne({where: {id_quedada: req.params.idq, id_gente: req.params.idg}}).then (
          function(asistencia) {
             if (asistencia) { asistencia.destroy(); res.send(asistencia); next() }
             else throw new Error('Error: No hay asistencia....')}
      ).catch(function(error) {console.log('Error: function noasiste Asistencia - catch');next(error)})
};
