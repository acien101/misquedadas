var path = require('path'); var sequelize = require('../../ddbb');
var asistencia = require('../../models');
module.exports = function asisisteAsistencia(req,res,next) { 
      //console.log('asiste Asistencia - req= '+req); 
      //console.log('asiste Asistencia - req params idq= '+req.params.idq);
      //console.log('asiste Asistencia - req params idg= '+req.params.idg);
      var asistencia = sequelize.import(path.join(__dirname,'../../models/asistencia'));
      asistencia.findOne({where: {id_quedada: req.params.idq, id_gente: req.params.idg}}).then (
          function(asistencia) {
             console.log('asiste Asistencia - Error Ya existe: idq= '+req.params.idq+', idg= '+req.params.idg);next();}
      ).catch(function(error) {console.log('Error: function findOne Asistencia - catch - OK no existia'); });
      asistencia.create({id_quedada: req.params.idq, id_gente: req.params.idg}).then(
         function (asistencia){//console.log('asiste Asistencia - creada: idq= '+asistencia.id_quedada+', idg= '+asistencia.id_gente)
         }
      ).catch(function(error) {console.log('Error: function create Asistencia - catch');next(error)})
};
