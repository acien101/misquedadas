var trozonombre= process.argv[2]; //console.log('trozonombre= '+trozonombre);
var lastch= trozonombre[trozonombre.length-1]; //console.log('lastch= ',lastch);
(lastch !== '"')?console.log("s"):console.log("n");
