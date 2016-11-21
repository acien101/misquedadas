var spawnSync = require('child_process').spawnSync;
var child = spawnSync('curl', [ 'http://localhost:8080/penias' ]);
var penias=JSON.parse(child.stdout); 
var child = spawnSync('curl', [ 'http://localhost:8080/pertenencias' ]);
var pertenencias=JSON.parse(child.stdout); 
var idPertenecientes= []; var salida="";
for (i=0; i<penias.length; i++) { var k=0;
  for (j=0; j<pertenencias.length;j++){
     if (penias[i].nombre === pertenencias[j].nombre) {
        //console.log('test/gente-penias - pertenencia encontrada= '+pertenencias[k].id_gente);
        idPertenecientes[k]=pertenencias[j].id_gente; 
        //console.log('test/gente-penias - perteneciente encontrado= '+idPertenecientes[k]);
        k++;
  }};
  //console.log('test/gente-penias - Número de pertenecientes= '+idPertenecientes.length);
  //console.log('test/gente-penias - Primer perteneciente= '+idPertenecientes[0]);
  if (idPertenecientes.length === 0)
     console.log('BBDD test error - No hay "gente" perteneciente a la "peña" "'+penias[i].nombre+'".');
  else {
     for (k=0; k<idPertenecientes.length;k++) {
        //console.log('test/gente-penias - curl para buscar gente = http://localhost:8080/gente/'+idPertenecientes[k]);
        var child = spawnSync('curl', [ 'http://localhost:8080/gente/'+idPertenecientes[k] ]);
        if (child.stdout ) {//console.log('test/gente-penias - child.stdout ='+child.stdout+' Error= '+child.error);
           salida+='Existe la "gente" con id= "'+idPertenecientes[k]+'" de la "peña" "'+penias[i].nombre+'". '; }
        else console.log('BBDD test error - No existe la "gente" con id= "'+idPertenecientes[k]+'" identificado en la "peña": "'+penias[i].nombre+'".');
     }
  }
}
console.log(salida);
