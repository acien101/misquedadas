var path = require('path'); var sequelize = require('../../ddbb');
var grupo = require('../../models');
module.exports = function escudoGrupoGrupos(req,res,next) { 
      console.log('escudoGrupo Grupos - req= '+req); console.log('escudoGrupo Grupos - req params id= '+req.params.id);
      var grupo = sequelize.import(path.join(__dirname,'../../models/grupo'));
      console.log('escudoGrupoGrupos - nombre= '+req.params.nombre);
      grupo.findOne({where: {nombre: req.params.nombre}}).then (function(grupo) {
          if (grupo) {res.send(grupo.escudo); next() }
          else throw new Error('Error: No hay escudoGrupo....')
      }).catch(function(error) {console.log('Error: function escudoGrupoGrupos - catch');next(error)})
};
