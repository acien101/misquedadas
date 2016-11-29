var ddbbkey = require('./keys');
var path = require('path');
var Sequelize = require('sequelize');
var ddbbOpts= {define:{freezeTableName:true, timestamps:false}};
var ddbb = new Sequelize(
        'misquedadas','root',ddbbkey,{host:'localhost', dialect:"mysql",pool: {max:5, min:0, idle:10000}});
ddbb
  .authenticate()
  .then(function(err) { console.log('Connection has been established successfully.'); })
  .catch(function (err) { console.log('Unable to connect to the database:', err); });

var quedada = ddbb.import(path.join(__dirname,'models/quedada'));
var grupo = ddbb.import(path.join(__dirname,'models/grupo'));
    grupo.removeAttribute('id');
var gente = ddbb.import(path.join(__dirname,'models/gente'));
var sitio = ddbb.import(path.join(__dirname,'models/sitio'));
var asistencia = ddbb.import(path.join(__dirname,'models/asistencia'));
    asistencia.removeAttribute('id');
var pertenencia = ddbb.import(path.join(__dirname,'models/pertenencia'));
    pertenencia.removeAttribute('id');

quedada.sync({force: false}).then(function () {return quedada;});
grupo.sync({force: false}).then(function () {return grupo;});
gente.sync({force: false}).then(function () {return gente;});
sitio.sync({force: false}).then(function () {return sitio;});
asistencia.sync({force: false}).then(function () {return asistencia;});
pertenencia.sync({force: false}).then(function () {return pertenencia;});

module.exports = ddbb;
