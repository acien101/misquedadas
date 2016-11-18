var pna = ""; var delta=2; 
//console.log('tests/losidsdegente.js: nombre de peña: '+pna);
pna= process.argv[delta];
//console.log('tests/losidsdegente.js: nombre de peña: '+pna);
if (! pna) { console.log('WARNING:  tests/losidsdegente.js: NO nombre de peña'); exit(1);}
//console.log('tests/losidsdegente.js-nombre de peña: '+pna);

var readline = require('readline');
var rl = readline.createInterface({ input: process.stdin, output: process.stdout, terminal: false }); 
rl.on('line', function(line){//console.log("line = "+line);
	    var l=JSON.parse(line); for (i=0; i<l.length;i++) {if (l[i].nombre === pna) {console.log (l[i].id_gente);}}
})
