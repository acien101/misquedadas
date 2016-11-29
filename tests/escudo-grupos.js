var spawnSync = require('child_process').spawnSync;
var child = spawnSync('curl', [ 'http://localhost:8080/grupos' ]);
var grupos=JSON.parse(child.stdout); 
var salida="";
var fs = require('fs')
function getFileRealPath(s){ try {return fs.realpathSync(s);} catch(e){return false;} }
for (i=0; i<grupos.length; i++) { var k=0;
  //console.log('escudo-grupos= '+grupos[i].escudo);
  if (!grupos[i].escudo) console.log('BBDD test error - No hay definido "escudo" en el "grupo" "'+grupos[i].nombre+'".');
  else {
     var pathToCheck=('media/'+grupos[i].escudo).replace(/ /g,'\ ').replace(/"/g,'');
     //console.log('PathToCheck= '+pathToCheck);
     if (getFileRealPath(pathToCheck))
        salida+='Existe el fichero "escudo" "'+grupos[i].escudo+'" del "grupo" "'+grupos[i].nombre+'". ';
     else console.log('BBDD test error - No existe el fichero de "escudo" "'+grupos[i].escudo+' en el "grupo" "'+grupos[i].nombre+'".');
  }
}
console.log(salida);
