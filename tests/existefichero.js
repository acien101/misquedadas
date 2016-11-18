var fs = require('fs')
function getFileRealPath(s){
    try {return fs.realpathSync(s);} catch(e){return false;}
}
var path='media/'; var pathToCheck= process.argv[2]; 
if (! pathToCheck) { //console.log('NO path: '+pathToCheck);
   process.exit(1);}
pathToCheck=(path+pathToCheck).replace(/ /g,'\ ').replace(/"/g,'');
//console.log('PathToCheck= '+pathToCheck);
if( (path=getFileRealPath(pathToCheck)) === false){ // console.log('NO Real Path: '+path);
   process.exit(1);}
//console.log('file/dir exists: '+path);
process.exit(0);
