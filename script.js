document.addEventListener("DOMContentLoaded", function(){
 
let btnJugar = document.getElementById("btnJugar");
let btnInstrucciones = document.getElementById("btnInstrucciones");
let btnVolver = document.getElementById("btnVolver");
let btnInicio = document.getElementById("btnInicio");
 
if(btnJugar){
btnJugar.addEventListener("click", function(){
window.location.href = "juego.html";
});
}
 
if(btnInstrucciones){
btnInstrucciones.addEventListener("click", function(){
window.location.href = "instrucciones.html";
});
}
 
if(btnVolver){
btnVolver.addEventListener("click", function(){
window.location.href = "index.html";
});
}
 
if(btnInicio){
btnInicio.addEventListener("click", function(){
window.location.href = "index.html";
});
}
 
});