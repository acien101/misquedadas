var path = require('path'); var sequelize = require('../../ddbb');
var quedada = require('../../models');
var grupo = require('../../models');
var gente = require('../../models');
var sitio = require('../../models');


module.exports = function serializeDDBB(req,res,next) {
   //console.log('serializeDDBB');
   function onlyUnique(value, index, self) {
       var i=0; while (self[i].nombre !== value.nombre) i++;
       return i === index;
   }
   var ddbb= {}; ddbbCardinality=0;
   var resSend= function(){ ddbbCardinality+=1; if (ddbbCardinality > 3.5) {res.send(ddbb); next();}}

   //console.log('serializeDDBB - Quedadas');
   var quedada = sequelize.import(path.join(__dirname,'../../models/quedada'));
   quedada.all().then (function(quedada) {
       if (quedada) {ddbb['Quedadas']= quedada; resSend();}
       else throw new Error('Error: No hay quedada....')
   }).catch(function(error) {console.log('Error: function serializeDDBB- catch quedada... '+error);next(error)});
   //console.log('serializeDDBB - Grupos');
   var grupo = sequelize.import(path.join(__dirname,'../../models/grupo'));
   grupo.all().then (function(grupo) {
       // ya son clavers únicas -- if (grupo) {ddbb['Grupos']= grupo.filter(onlyUnique);  resSend(); }
       if (grupo) {ddbb['Grupos']= grupo;  resSend(); }
       else throw new Error('Error: No hay grupo....')
   }).catch(function(error) {console.log('Error: function serializeDDBB- catch grupo... '+error);next(error)});
   //console.log('serializeDDBB - Gente');
   var gente = sequelize.import(path.join(__dirname,'../../models/gente'));
   gente.all().then (function(gente) {
       if (gente) {ddbb['Gente']= gente; resSend();}
       else throw new Error('Error: No hay Gente....')
   }).catch(function(error) {console.log('Error: function serializeDDBB- catch gente... '+error);next(error)});
   //console.log('serializeDDBB - Sitio');
   var sitio = sequelize.import(path.join(__dirname,'../../models/sitio'));
   sitio.all().then (function(sitio) {
       if (sitio) {ddbb['Sitios']= sitio; resSend();}
       else throw new Error('Error: No hay Sitio....')
   }).catch(function(error) {console.log('Error: function serializeDDBB- catch sitio.. '+error);next(error)});
}



