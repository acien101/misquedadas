var path = require('path'); var sequelize = require('../../ddbb');
var grupo = require('../../models');

function onlyUnique(value, index, self) { 
    var i=0; while (self[i].nombre !== value.nombre) i++;
    return i === index;
}

module.exports = function listGrupos(req,res,next) { 
      var grupo = sequelize.import(path.join(__dirname,'../../models/grupo'));
      grupo.all().then (function(grupo) {
          if (grupo) {res.send(grupo); next() }
          else throw new Error('Error: No hay grupo....')
      }).catch(function(error) {console.log('Error: function listGrupos - catch');next(error)})
};
