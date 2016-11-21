var spawnSync = require('child_process').spawnSync;
var child = spawnSync('curl', [ 'http://localhost:8080/penias' ]);
var penias=JSON.parse(child.stdout); 
var salida="";
var fs = require('fs')
function getFileRealPath(s){ try {return fs.realpathSync(s);} catch(e){return false;} }
for (i=0; i<penias.length; i++) { var k=0;
  //console.log('escudo-peñas= '+penias[i].escudo);
  if (!penias[i].escudo) console.log('BBDD test error - No hay definido "escudo" en la "peña" "'+penias[i].nombre+'".');
  else {
     var pathToCheck=('media/'+penias[i].escudo).replace(/ /g,'\ ').replace(/"/g,'');
     //console.log('PathToCheck= '+pathToCheck);
     if (getFileRealPath(pathToCheck))
        salida+='Existe el fichero "escudo" "'+penias[i].escudo+'" de la "peña" "'+penias[i].nombre+'". ';
     else console.log('BBDD test error - No existe el fichero de "escudo" "'+penias[i].escudo+' en la "peña" "'+penias[i].nombre+'".');
  }
}
console.log(salida);
