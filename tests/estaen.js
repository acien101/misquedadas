var contenido= process.argv[2];
var continente= ""; var delta=3; var i=0;
while (process.argv[i+delta]) {
   continente+= process.argv[i+delta]; i++; 
   //console.log('contenido= '+contenido+', i= '+i+', continente= '+continente);
}
var n=continente.search(contenido);
if (n < 0) {console.log('NOT found');
   process.exit(1);}
//console.log('Found');
process.exit(0);
