var path = require('path'); var sequelize = require('../../ddbb');
var gente = require('../../models');
module.exports = function genteGente(req,res,next) { 
      //console.log('genteGente  - req= '+req); console.log('genteGente  - req params id= '+req.params.id);
      var gente = sequelize.import(path.join(__dirname,'../../models/gente'));
      //console.log('genteGente - id= '+req.params.id);
      gente.findOne({where: {id: req.params.id}}).then (function(gente) {
          if (gente) {res.send(gente); next() }
          else throw new Error('Error: No hay gente....')
      }).catch(function(error) {console.log('Error: function genteGente - catch');next(error)})
};
