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
function pintamenugrupos(d){//console.log('pintamenugrupos '+d);
    var x= '<h3 class="h3encuerpo" >Las grupos registradas son:</h3>';
    x += '<ul>';
    for (i in d) { x+= '<li><a href="/grupo/'+d[i].nombre+'">'+d[i].nombre+'</a></li>'; }
    x+= '</ul>';
    x += '<p class="pencuerpo">(los hipervínculos presentan las estructuras "node" correspondientes a los grupos)</p><ul>';
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
function pintamenupertenece(d){//console.log('pintamenupertenece '+d);
    var x= '<h3 class="h3encuerpo" >Los componentes de los grupos son:</h3>';
    x += '<ul>';
    for (i in d) { x+= '<li><a href="/grupo/'+d[i].nombre+'">'+d[i].nombre+'</a>: <a href="/gente/'+d[i].id_gente+'">'+d[i].id_gente+'</a>.</li>'; }
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
function pintafecha_de_creacion(d){console.log('pintafecha_de_creacion '+d);
    var x= d.fecha_de_creacion.replace(/T/,' a las ').replace(/\..+/,''); 
    document.getElementById('grupofecha_de_creacion').innerHTML = x;
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
//   - Grupo quedada implementations -
function pintagrupo(d){//console.log('pintagrupo '+d);
    var x= d+' !!!';
    //console.log(x);
    document.getElementById('grupo').innerHTML = x;
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

//   - Grupos implementations -
function pintagrupos(d){//console.log('pintagrupos '+d);
    for (i in d) {
       //console.log('pintagrupos - I= '+i+', nombre= '+d[i].nombre);
        var x= '<div class="grupoenpie" id="grupoenpie'+i+'">'+d[i].nombre+' <i>desde '+d[i].fecha_creacion.replace(/T.*/,'')+'</i><br />';
        document.getElementById('pie').innerHTML += x;
        ajaxCall('/pertenencias/'+d[i].nombre,obtentagentegrupo,i);
        var x= '</div>';
        document.getElementById('pie').innerHTML += x;
    }
}

//   - Gente implementations -
function obtentagentegrupo(d,p){//console.log('obtentagentegrupo - grupo= '+p+', d= '+d);
    for (i in d) {
       //console.log('obtentagentegrupo - I= '+i+', id.gente '+d[i].id_gente);
       ajaxCall('/gente/'+d[i].id_gente,pintaindividuogrupo,p);
    }
}
function pintaindividuogrupo(d,p){//console.log('pintaindividuogrupo '+d);
       //console.log('pintaindividuogrupo - id '+d.id+', nombre= '+d.nombre+', alias= '+d.alias);
       var x='<div class="piecontent"> <img id="foto'+d.id+'" class="gentecontent" src="/media/'+d.foto+'" title="id '+d.id+', nombre '+d.nombre+', alias '+d.alias+', '+d.foto+'">';
       x+= '<img id="asiste'+d.id+'" class="genteasiste" src="/icons/asistir.jpg"></div>';
       var divp='grupoenpie'+p;
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
      ajaxCall('/quedada/'+lqa+'/grupo',pintagrupo);
      ajaxCall('/quedada/'+lqa+'/sitio',pintasitio);
      ajaxCall('/grupos/',pintagrupos); setTimeout(polltodalagente, 3000); 
}

