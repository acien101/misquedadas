var path = require('path'); var sequelize = require('../../ddbb');
var grupo = require('../../models');
module.exports = function grupoGrupos(req,res,next) { 
      //console.log('grupoGrupos  - req= '+req); console.log('grupoGrupos  - req params nombre= '+req.params.nombre);
      var grupo = sequelize.import(path.join(__dirname,'../../models/grupo'));
      //console.log('grupoGrupos - nombre= '+req.params.nombre);
      grupo.findOne({where: {nombre: req.params.nombre}}).then (function(grupo) {
          if (grupo) { res.send(grupo); next() }
          else throw new Error('Error: No hay grupo....')
      }).catch(function(error) {console.log('Error: function grupoGrupos - catch');next(error)})
};
