var server = require('./server');
var restify = require('restify');
var resources = require('./resources');
var validating = require('./middleware/validating');
var schemas = require('./schemas');


server.get ('/', 			function(req,res,next) {console.log('route!! get /'); next();},
					resources.main); 
server.get ('/favicon.ico', 		function(req,res,next) {console.log('route!! get /favicon.ico'); next();},
					resources.favicon); 
server.get ('/icons/:file', 		function(req,res,next) {console.log('route!! get /icons/:file'); next();},
					resources.icons); 
server.get('/js/:file', 		function(req,res,next) {console.log('route!! get /js/:file'); next();},
					resources.js); 
server.get('/css/:file', 		function(req,res,next) {console.log('route!! get /css/:file'); next();},
					resources.css); 
server.get('/media/:file', 		function(req,res,next) {console.log('route!! get /media/:file'); next();},
					resources.media); 
server.get('/ddbb', 			function(req,res,next) {console.log('route!! get /ddbb'); next();},
					resources.ddbb); 
server.get ('/lqa/:id', 		function(req,res,next) {console.log('route!! get /lqa/:id'); next();},
					resources.lqa.lqa); 
server.get ('/quedadas', 		function(req,res,next) {console.log('route!! get /quedadas'); next();},
					resources.quedadas.list); 
server.get ('/quedada/:id', 		function(req,res,next) {console.log('route!! get /quedada/:id'); next();},
					resources.quedadas.quedada); 
server.post('/quedada', 		function(req,res,next) {console.log('route!! post /quedada'); next();},
					validating(schemas.new),
					resources.quedadas.new); 
server.del ('/quedada/:id', 		function(req,res,next) {console.log('route!! delete /quedada/:id'); next();},
					resources.quedadas.del); 
server.get ('/quedada/:id/foto', 	function(req,res,next) {console.log('route!! get /quedada/:id/foto'); next();},
					resources.quedadas.foto); 
server.get ('/quedada/:id/sitio',	function(req,res,next) {console.log('route!! get /quedada/:id/sitio'); next();},
					resources.quedadas.sitio); 
server.get ('/quedada/:id/penia',	function(req,res,next) {console.log('route!! get /quedada/:id/penia'); next();},
					resources.quedadas.penia); 
server.get ('/quedada/:id/asisten',	function(req,res,next) {console.log('route!! get /quedada/:id/asisten'); next();},
					resources.quedadas.asisten); 
server.get('/penias', 			function(req,res,next) {console.log('route!! get /penias'); next();},
					resources.penias.list); 
server.get('/penia/:nombre', 		function(req,res,next) {console.log('route!! get /penia/:nombre'); next();},
					resources.penias.penia); 

server.get('/gente', 			function(req,res,next) {console.log('route!! /gente'); next();},
					resources.gente.list); 
server.get('/gente/:id', 		function(req,res,next) {console.log('route!! get /gente/:id'); next();},
					resources.gente.gente); 

server.get('/sitios', 			function(req,res,next) {console.log('route!! get /sitios'); next();},
					resources.sitios.list); 
server.get('/sitio/:id', 		function(req,res,next) {console.log('route!! get /sitio/:id'); next();},
					resources.sitios.sitio); 
server.get('/sitio/:id/geolocalizacion',function(req,res,next) {console.log('route!! get /sitio/:id/lugar'); next();},
					resources.sitios.geolocalizacion); 
server.get('/sitio/:id/foto', 		function(req,res,next) {console.log('route!! get /sitio/:id/foto'); next();},
					resources.sitios.foto); 
server.get('/asistencias',		function(req,res,next) {console.log('route!! get /asistencias'); next();},
					resources.asistencias.list); 
server.post ('/asistencias/:idq/:idg',	function(req,res,next) {console.log('route!! post /asistencia/:idq/:idg'); next();},
					resources.asistencias.asiste); 
server.del ('/asistencias/:idq/:idg',	function(req,res,next) {console.log('route!! delete /asistencia/:idq/:idg'); next();},
					resources.asistencias.noasiste); 
server.post ('/botones/nueva',		function(req,res,next) {console.log('route!! post /boton/nueva'); next();},
					resources.botones.nueva); 
server.post ('/botones/replantea',	function(req,res,next) {console.log('route!! post /boton/replantea'); next();},
					resources.botones.replantea); 
