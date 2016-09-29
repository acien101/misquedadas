//console.log('main.js');

//   ------ Auxiliary functions ------------

function dummy(d){//console.log('dummy'+d);
}

function ajaxPostCall(url,cfunc,par1,par2,par3) {
  //console.log('ajaxPostCall - url= '+url+', cfunc= '+cfunc);
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function(){
      if (xhttp.readyState == 4 && xhttp.status == 200) {var d = JSON.parse(xhttp.responseText); cfunc(d,par1,par2,par3);}
  };
  xhttp.open("POST", url, true);
  xhttp.send();
}
function ajaxDelCall(url,cfunc,par1,par2,par3) {
  //console.log('ajaxDelCall - url= '+url+', cfunc= '+cfunc);
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function(){
      if (xhttp.readyState == 4 && xhttp.status == 200) {var d = JSON.parse(xhttp.responseText); cfunc(d,par1,par2,par3);}
  };
  xhttp.open("DELETE", url, true);
  xhttp.send();
}
function ajaxCall(url,cfunc,par1,par2,par3) {
  //console.log('ajaxCall - url= '+url+', cfunc= '+cfunc);
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function(){
      if (xhttp.readyState == 4 && xhttp.status == 200) {var d = JSON.parse(xhttp.responseText); cfunc(d,par1,par2,par3);}
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}

//   ------  Cabecera implementations ------------

//   -  Menus implementations -
function pintamenuquedadas(d){//console.log('pintamenuquedadas '+d);
    var x= '<h3 class="h3encuerpo" >Las quedadas registradas son:</h3>';
    x += '<ul>';
    for (i in d) { x+= '<li><a href="/lqa/'+d[i].id+'">'+d[i].nombre+'</a></li>'; }
    x+= '</ul>';
    x+= '<br /><br />&nbsp;&nbsp;<a href="/">Volver</a>';
    document.getElementById('cuerpo').innerHTML = x;
}
function pintamenupenias(d){//console.log('pintamenupenias '+d);
    var x= '<h3 class="h3encuerpo" >Las peñas registradas son:</h3>';
    x += '<ul>';
    for (i in d) { x+= '<li><a href="/penia/'+d[i].nombre+'">'+d[i].nombre+'</a></li>'; }
    x+= '</ul>';
    x += '<p class="pencuerpo">(los hipervínculos presentan las estructuras "node" correspondientes a las penias)</p><ul>';
    x+= '<br /><br />&nbsp;&nbsp;<a href="/">Volver</a>';
    document.getElementById('cuerpo').innerHTML = x;
}
function pintamenugente(d){//console.log('pintamenugente '+d);
    var x= '<h3 class="h3encuerpo" >La gente registrada son:</h3>';
    x += '<ul>';
    for (i in d) { x+= '<li><a href="/gente/'+d[i].id+'">'+d[i].nombre+'</a></li>'; }
    x+= '</ul>';
    x += '<p class="pencuerpo">(los hipervínculos presentan las estructuras "node" correspondientes a la persona)</p><ul>';
    x+= '<br /><br />&nbsp;&nbsp;<a href="/">Volver</a>';
    document.getElementById('cuerpo').innerHTML = x;
}
function pintamenusitios(d){//console.log('pintamenusitios '+d);
    var x= '<h3 class="h3encuerpo" >Los sitios registrados son:</h3>';
    x += '<ul>';
    for (i in d) { x+= '<li><a href="/sitio/'+d[i].id+'">'+d[i].nombre+'</a></li>'; }
    x+= '</ul>';
    x += '<p class="pencuerpo">(los hipervínculos presentan las estructuras "node" correspondientes al sitio)</p><ul>';
    x+= '<br /><br />&nbsp;&nbsp;<a href="/">Volver</a>';
    document.getElementById('cuerpo').innerHTML = x;
}

//   -  Nombre y fecha implementations -
function pintanombre(d){//console.log('pintanombre '+d);
    var x= d.nombre; 
    document.getElementById('quedadanombre').innerHTML = x;
}
function pintafecha(d){//console.log('pintafecha '+d);
    var x= d.fechahora.replace(/T/,' a las ').replace(/\..+/,''); 
    document.getElementById('quedadafecha').innerHTML = x;
}

//   - Buttons implementations -
function nueva(){ //console.log('Botón nueva pulsado');
    ajaxPostCall('/botones/nueva',pintabotonesnueva);
}
function pintabotonesnueva(d){ //console.log('pintabotonesnueva',d);
    document.getElementById('cuerpo').innerHTML = d;
}
function asiste(){ //console.log('Botón asiste pulsado');
      var g= prompt('¿Quién asiste?', 'id'); 
      if (g) ajaxPostCall('/asistencias/'+lqa+'/'+g,dummy);
}
function noasiste(){ //console.log('Botón no asiste pulsado');
      var g= prompt('¿Quién no asiste?', 'id'); 
      if (g) ajaxDelCall('/asistencias/'+lqa+'/'+g,dummy);
}
function replantea(){ //console.log('Botón replantea pulsado');
    ajaxPostCall('/botones/replantea',pintabotonesreplantea);
}
function pintabotonesreplantea(d){ //console.log('pintabotonesreplantea',d);
    document.getElementById('cuerpo').innerHTML = d;
}
function borra(){ //console.log('Botón borra pulsado');
      var ok= confirm('¿De verdad quieres eliminar la "quedada" actual?'); 
      if (ok) ajaxDelCall('/quedada/'+lqa, dummy);
}

//   ------  cuerpo implementations ------------

//   - Mapa implementations -
function pintamapasitio(d){//console.log('pintamapasitio '+d);
    ajaxCall('/sitio/'+d,pintamapa);
}
function pintamapa(d){//console.log('pintamapa '+d);
    var latlong= d.geolocalizacion.split(",");
    //console.log('geolocalizacion latlong = '+latlong[0]+', '+latlong[1]);
    ponerVista(parseFloat(latlong[0]),parseFloat(latlong[1]),d.nombre);
}
//   - Foto quedada implementations -
function pintafotoquedada(d){//console.log('pintafotoquedada '+d);
    var x= '<img id="fotoquedadacontent" src="/media/'+d.foto+'" title="id '+d.id+', nombre '+d.nombre+', '+d.foto+'">'; 
    document.getElementById('fotoquedada').innerHTML = x;
}
//   - Sitio quedada implementations -
function pintasitio(d){//console.log('pintasitio '+d);
    ajaxCall('/sitio/'+d, pintadatossitio);
}
function pintadatossitio(d){//console.log('pintadatossitio '+d);
    var x= 'Nos vemos en <b>'+d.nombre+'</b><br /> ('+d.geolocalizacion+')<br />';
    document.getElementById('sitio').innerHTML = x;
    var y= '<img id="fotositiocontent" src="/media/'+d.foto+'" title="id '+d.id+', nombre '+d.nombre+', '+d.geolocalizacion+', '+d.foto+'">'; 
    document.getElementById('fotositio').innerHTML = y;
}

//   ------  pie implementations ------------

//   - Peñas implementations -
function pintapenias(d){//console.log('pintapenias '+d);
    for (i in d) {
       //console.log('pintapenias - I= '+i+', nombre= '+d[i].nombre);
        var x= '<div class="peniaenpie" id="peniaenpie'+i+'">'+d[i].nombre+'<br />';
        document.getElementById('pie').innerHTML += x;
        ajaxCall('/penia/'+d[i].nombre,obtentagentepenia,i);
        var x= '</div>';
        document.getElementById('pie').innerHTML += x;
    }
}

//   - Gente implementations -
function obtentagentepenia(d,p){//console.log('obtentagentepenia - penia= '+p+', d= '+d);
    for (i in d) {
       //console.log('obtentagentepenia - I= '+i+', id.gente '+d[i].id_gente);
       ajaxCall('/gente/'+d[i].id_gente,pintaindividuopenia,p);
    }
}
function pintaindividuopenia(d,p){//console.log('pintaindividuopenia '+d);
       //console.log('pintaindividuopenia - id '+d.id+', nombre= '+d.nombre+', alias= '+d.alias);
       var x='<div class="piecontent"> <img id="foto'+d.id+'" class="gentecontent" src="/media/'+d.foto+'" title="id '+d.id+', nombre '+d.nombre+', alias '+d.alias+', '+d.foto+'">';
       x+= '<img id="asiste'+d.id+'" class="genteasiste" src="/icons/asistir.jpg"></div>';
       var divp='peniaenpie'+p;
       document.getElementById(divp).innerHTML += x;
}

//   - Asistencias implementations -
function polltodalagente(){//console.log('polltodalagente ');
    ajaxCall('/quedada/'+lqa+'/asisten',resaltaasistentes);
    setTimeout(polltodalagente, 8000);
}
function resaltaasistentes(d){//console.log('resaltaasistentes '+d);
    var indivs = document.getElementsByClassName("gentecontent");
    var indivsasisten = document.getElementsByClassName("genteasiste");
    //console.log('resaltaasistentes - indivsNo= '+indivs.length+', indivs= '+indivs);
    //console.log('resaltaasistentes - indivsasistenNo= '+indivsasisten.length+', indivsasisten= '+indivsasisten);
    for (i=0; i<indivsasisten.length; i++){//console.log('resaltaasistentes - borra asistencia I= '+i); 
      indivsasisten[i].setAttribute("style","display: none; "); }
    for (i=0; i<indivs.length; i++){//console.log('resaltaasistentes - I= '+i+', fotoid= '+indivs[i].id); 
       for (j in d) {//console.log('resaltaasistentes - J= '+j+', idquedada = '+d[j].id_quedada+', idgente '+d[j].id_gente+', fotoid= '+'foto'+d[j].id_gente); 
           var fotoid= 'foto'+d[j].id_gente;
           if (indivs[i].id === fotoid) {
               //console.log('resaltaasistentes - found: individuo= '+i+', fotoindivs= '+indivs[i].id+', asistencia= '+j+', quedada= '+d[j].id_quedada+', individuoqueasiste= '+d[j].id_gente+', fotoasistente= '+fotoid);
               indivsasisten[i].setAttribute("style","display: block; ");
           } 
       }
    }
}

//  ------ main page  ---------------------

function mainpage() {
      ajaxCall('/quedada/'+lqa,pintanombre);
      ajaxCall('/quedada/'+lqa,pintafecha);
      ajaxCall('/quedada/'+lqa+'/sitio',pintamapasitio);
      ajaxCall('/quedada/'+lqa,pintafotoquedada);
      ajaxCall('/quedada/'+lqa+'/sitio',pintasitio);
      ajaxCall('/penias/',pintapenias); setTimeout(polltodalagente, 3000); 
}

