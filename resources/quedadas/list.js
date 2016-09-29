var path = require('path'); var sequelize = require('../../ddbb');
var quedada = require('../../models');
module.exports = function listQuedadas(req,res,next) { 
      var quedada = sequelize.import(path.join(__dirname,'../../models/quedada'));
      quedada.all().then (function(quedada) {
          if (quedada) {res.send(quedada); next() }
          else throw new Error('Error: No hay quedada....')
      }).catch(function(error) {console.log('Error: function listQuedadas - catch');next(error)})
};
