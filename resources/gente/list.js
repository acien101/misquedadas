var path = require('path'); var sequelize = require('../../ddbb');
var gente = require('../../models');
module.exports = function listGente(req,res,next) { 
      var gente = sequelize.import(path.join(__dirname,'../../models/gente'));
      gente.all().then (function(gente) {
          if (gente) {res.send(gente); next() }
          else throw new Error('Error: No hay gente....')
      }).catch(function(error) {console.log('Error: function listGente - catch');next(error)})
};
