var path = require('path'); var sequelize = require('../../ddbb');
var quedada = require('../../models');
module.exports = function quedadaQuedadas(req,res,next) { 
      //console.log('quedada Quedadas - req= '+req); console.log('quedada Quedadas - req params id= '+req.params.id);
      var quedada = sequelize.import(path.join(__dirname,'../../models/quedada'));
      //console.log('quedadaQuedadas - id= '+req.params.id);
      quedada.findOne({where: {id: req.params.id}}).then (function(quedada) {
          if (quedada) {res.send(quedada); next() }
          else throw new Error('Error: No hay quedada....')
      }).catch(function(error) {console.log('Error: function quedadaQuedadas - catch');next(error)})
};
