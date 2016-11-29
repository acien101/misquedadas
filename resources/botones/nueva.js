var path = require('path'); var sequelize = require('../../ddbb');
var quedada = require('../../models');
var sitio = require('../../models');
var grupo = require('../../models');
var gente = require('../../models');
module.exports = function nuevaBotones(req,res,next) { 
    //console.log('nueva Botones - req= '+req); 
    var x= '<h3>Crea: quedadas | sitios | grupos | gente</h3>';
        x += '<p class="cuerpo">Debes utilizar la consola de gestión de BBDDs de tu sistema:<br/><br/>';
        x += '   "<i>miserviftel@ftel1:~$<b>mysql -u root -p ****</b></i>"<br/><br/>';
        x += '   Alternativamente, para hacerlo desde este portal, debes completar el programa javascript de servidor guardado';
        x += '   en el fichero <b>nueva.js</b> que puedes encontrar en tu servidor</p><br/><br/>';
        x += '<br /><br />&nbsp;&nbsp;<a href="/">Volver</a>';
    //console.log('nueva Botones - x= '+x); 
    res.send(x); next(); 
};
