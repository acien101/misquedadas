var path = require('path'); var sequelize = require('../../ddbb');
var penia = require('../../models');
module.exports = function peniaPenias(req,res,next) { 
      //console.log('peniaPenias  - req= '+req); console.log('peniaPenias  - req params nombre= '+req.params.nombre);
      var penia = sequelize.import(path.join(__dirname,'../../models/penia'));
      //console.log('peniaPenias - nombre= '+req.params.nombre);
      penia.findOne({where: {nombre: req.params.nombre}}).then (function(penia) {
          if (penia) { res.send(penia); next() }
          else throw new Error('Error: No hay penia....')
      }).catch(function(error) {console.log('Error: function peniaPenias - catch');next(error)})
};
