var path = require('path'); var sequelize = require('../../ddbb');
var penia = require('../../models');
module.exports = function escudoPeniaPenias(req,res,next) { 
      console.log('escudoPenia Penias - req= '+req); console.log('escudoPenia Penias - req params id= '+req.params.id);
      var penia = sequelize.import(path.join(__dirname,'../../models/penia'));
      console.log('escudoPeniaPenias - nombre= '+req.params.nombre);
      penia.findOne({where: {nombre: req.params.nombre}}).then (function(penia) {
          if (penia) {res.send(penia.escudo); next() }
          else throw new Error('Error: No hay escudoPenia....')
      }).catch(function(error) {console.log('Error: function escudoPeniaPenias - catch');next(error)})
};
