var nombre= process.argv[2]; //console.log('nombre= '+nombre);
    nombre= nombre.replace(/"/g,'').replace(/ /g,'%20'); console.log('nombre= '+nombre);
console.log(nombre);
