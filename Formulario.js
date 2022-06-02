
var usuarios = [];
var arraygraficado = [];
var graficatabla = function(){
    arraygraficado = JSON.parse(localStorage.getItem('users'))
    usuarios = arraygraficado
    document.getElementById('datos').innerHTML = ''
    for (let a = 0; a < arraygraficado.length; a++) {
        document.getElementById('datos').innerHTML += '<tr><td>'+ arraygraficado[a].nombre +'</td><td>'
        +arraygraficado[a].apellido +'</td><td>'
        +arraygraficado[a].direccion +'</td><td class ="btn btn-warning" onclick="eliminacion('+a+')">Eliminar</td></tr>'
    }}
var eliminacion = function(listado){
    usuarios.splice(listado,1)
    localStorage.setItem('users',JSON.stringify(usuarios))
   
    graficatabla()}
var iniciado = function(){
    graficatabla()}
    iniciado()
var almacenar = function(){
    var nombre = document.getElementById('nombres').value
    var apellido = document.getElementById('apellidos').value
    var direccion = document.getElementById('direccion').value
    usuarios.push({nombre:nombre, apellido:apellido, direccion:direccion})
    localStorage.setItem('users', JSON.stringify(usuarios))
    graficatabla()}

