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
var penia = ddbb.import(path.join(__dirname,'models/penia'));
    penia.removeAttribute('id');
var gente = ddbb.import(path.join(__dirname,'models/gente'));
var sitio = ddbb.import(path.join(__dirname,'models/sitio'));
var asistencia = ddbb.import(path.join(__dirname,'models/asistencia'));
    asistencia.removeAttribute('id');

quedada.sync({force: false}).then(function () {return quedada;});
penia.sync({force: false}).then(function () {return penia;});
gente.sync({force: false}).then(function () {return gente;});
sitio.sync({force: false}).then(function () {return sitio;});
asistencia.sync({force: false}).then(function () {return asistencia;});

module.exports = ddbb;
