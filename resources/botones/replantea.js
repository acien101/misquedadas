var path = require('path'); var sequelize = require('../../ddbb');
var quedada = require('../../models');
var sitio = require('../../models');
var penia = require('../../models');
var gente = require('../../models');
module.exports = function nuevaBotones(req,res,next) { 
    //console.log('nueva Configura - req= '+req); 
    var x= '<h3>Modifica: quedadas | sitios | peñas | gente</h3>';
        x += '<p class="cuerpo">Debes utilizar la consola de gestión de BBDDs de tu sistema:<br/><br/>';
        x += '   "<i>miserviftel@ftel1:~$<b>mysql -u root -p ****</b></i>"<br/><br/>';
        x += '   Alternativamente, para hacerlo desde este portal, debes completar el programa javascript de servidor guardado';
        x += '   en el fichero <b>replantea.js</b> que puedes encontrar en tu servidor</p><br/><br/>';
        x += '<br /><br />&nbsp;&nbsp;<a href="/">Volver</a>';
    //console.log('configura Botones - x= '+x); 
    res.send(x); next(); 
};