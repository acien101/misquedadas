var spawnSync = require('child_process').spawnSync;
var child = spawnSync('curl', [ 'http://localhost:8080/grupos' ]);
var grupos=JSON.parse(child.stdout); 
var salida="";
for (i=0; i<grupos.length; i++) { var k=0;
  //console.log('fecha_creacion-quedadas= '+grupos[i].fecha_creacion);
  if (grupos[i].fecha_creacion) salida+='Existe la "fecha_creacion" "'+grupos[i].fecha_creacion+'" del "grupo" "'+grupos[i].nombre+'". ';
  else console.log('BBDD test error - No hay "fecha_creacion" en el "grupo" "'+grupos[i].nombre+'".');
}
console.log(salida);
