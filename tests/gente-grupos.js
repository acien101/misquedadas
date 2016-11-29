var spawnSync = require('child_process').spawnSync;
var child = spawnSync('curl', [ 'http://localhost:8080/grupos' ]);
var grupos=JSON.parse(child.stdout); 
var child = spawnSync('curl', [ 'http://localhost:8080/pertenencias' ]);
var pertenencias=JSON.parse(child.stdout); 
var idPertenecientes= []; var salida="";
for (i=0; i<grupos.length; i++) { var k=0;
  for (j=0; j<pertenencias.length;j++){
     if (grupos[i].nombre === pertenencias[j].nombre) {
        //console.log('test/gente-grupos - pertenencia encontrada= '+pertenencias[k].id_gente);
        idPertenecientes[k]=pertenencias[j].id_gente; 
        //console.log('test/gente-grupos - perteneciente encontrado= '+idPertenecientes[k]);
        k++;
  }};
  //console.log('test/gente-grupos - Número de pertenecientes= '+idPertenecientes.length);
  //console.log('test/gente-grupos - Primer perteneciente= '+idPertenecientes[0]);
  if (idPertenecientes.length === 0)
     console.log('BBDD test error - No hay "gente" perteneciente al "grupo" "'+grupos[i].nombre+'".');
  else {
     for (k=0; k<idPertenecientes.length;k++) {
        //console.log('test/gente-grupos - curl para buscar gente = http://localhost:8080/gente/'+idPertenecientes[k]);
        var child = spawnSync('curl', [ 'http://localhost:8080/gente/'+idPertenecientes[k] ]);
        if (child.stdout ) {//console.log('test/gente-grupos - child.stdout ='+child.stdout+' Error= '+child.error);
           salida+='Existe la "gente" con id= "'+idPertenecientes[k]+'" del "grupo" "'+grupos[i].nombre+'". '; }
        else console.log('BBDD test error - No existe la "gente" con id= "'+idPertenecientes[k]+'" identificado en el "grupo": "'+grupos[i].nombre+'".');
     }
  }
}
console.log(salida);
