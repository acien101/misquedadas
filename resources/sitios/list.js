var path = require('path'); var sequelize = require('../../ddbb');
var sitio = require('../../models');
module.exports = function listSitio(req,res,next) { 
      var sitio = sequelize.import(path.join(__dirname,'../../models/sitio'));
      sitio.all().then (function(sitio) {
          if (sitio) {res.send(sitio); next() }
          else throw new Error('Error: No hay sitio....')
      }).catch(function(error) {console.log('Error: function listSitio - catch');next(error)})
};
