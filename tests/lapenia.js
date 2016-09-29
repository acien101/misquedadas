var readline = require('readline');
var rl = readline.createInterface({ input: process.stdin, output: process.stdout, terminal: false });

rl.on('line', function(line){//console.log('line = '+line);
    var l=JSON.parse(line); console.log('"'+l.nombre_peña+'"');
})
