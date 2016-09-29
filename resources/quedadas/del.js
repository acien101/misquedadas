var path = require('path'); var sequelize = require('../../ddbb');
var quedada = require('../../models');
module.exports = function delQuedada(req,res,next) { 
    //console.log('quedada delQuedada - req= '+req); console.log('quedada delQuedada - req params id= '+req.params.id);
    var quedada = sequelize.import(path.join(__dirname,'../../models/quedada'));
    quedada.findOne({where: {id: req.params.id}}).then (
       function(quedada) {
          if (quedada) { quedada.destroy(); res.send(quedada); next() }
          else throw new Error('Error: No hay quedada. que borrar...')}
       ).catch(function(error) {console.log('Error: function delQuedada - catch');next(error)})
}
