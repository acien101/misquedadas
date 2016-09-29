var contenido= ""; var delta=2; var i=0;
while (process.argv[i+delta]) { // console.log(' i= '+i+', contenido= '+contenido);
   contenido+= process.argv[i+delta]; i++; }
if (contenido) { // console.log('NOT empty');
   process.exit(1);}
//console.log('Empty');
process.exit(0);
