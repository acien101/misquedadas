var spawnSync = require('child_process').spawnSync;
var child = spawnSync('curl', [ 'http://localhost:8080/penias' ]);
var penias=JSON.parse(child.stdout); 
var salida="";
for (i=0; i<penias.length; i++) { var k=0;
  //console.log('fecha_creación-quedadas= '+penias[i].fecha_creación);
  if (penias[i].fecha_creación) salida+='Existe la "fecha_creación" "'+penias[i].fecha_creación+'" de la "peña" "'+penias[i].nombre+'". ';
  else console.log('BBDD test error - No hay "fecha_creación" en la "peña" "'+penias[i].nombre+'".');
}
console.log(salida);
