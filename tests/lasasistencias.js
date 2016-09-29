var readline = require('readline');
var rl = readline.createInterface({ input: process.stdin, output: process.stdout, terminal: false });

rl.on('line', function(line){
    var l=JSON.parse(line); for (i=0; i<l.length;i++) {console.log (l[i].id_quedada+','+l[i].id_gente);}
})
