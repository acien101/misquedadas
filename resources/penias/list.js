var path = require('path'); var sequelize = require('../../ddbb');
var penia = require('../../models');

function onlyUnique(value, index, self) { 
    var i=0; while (self[i].nombre !== value.nombre) i++;
    return i === index;
}

module.exports = function listPenias(req,res,next) { 
      var penia = sequelize.import(path.join(__dirname,'../../models/penia'));
      penia.all().then (function(penia) {
          if (penia) {res.send(penia.filter(onlyUnique)); next() }
          else throw new Error('Error: No hay penia....')
      }).catch(function(error) {console.log('Error: function listPenias - catch');next(error)})
};
