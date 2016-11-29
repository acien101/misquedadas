var grp = ""; var delta=2; 
//console.log('tests/losidsdegente.js: nombre de grupo '+grp);
grp= process.argv[delta];
//console.log('tests/losidsdegente.js: nombre de grupo: '+grp);
if (! grp) { console.log('WARNING:  tests/losidsdegente.js: NO nombre de grupo'); exit(1);}
//console.log('tests/losidsdegente.js-nombre de grupo: '+grp);

var readline = require('readline');
var rl = readline.createInterface({ input: process.stdin, output: process.stdout, terminal: false }); 
rl.on('line', function(line){//console.log("line = "+line);
	    var l=JSON.parse(line); for (i=0; i<l.length;i++) {if (l[i].nombre === grp) {console.log (l[i].id_gente);}}
})
