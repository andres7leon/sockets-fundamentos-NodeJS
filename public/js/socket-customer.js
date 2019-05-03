var socket = io();

socket.on('connect', function() {
    console.log("conectado al servidor");
})

// on = escuchar 
socket.on('disconnect', function() {
    console.log("perdimos conexion con el servidor");
})

//emit = enviar informacion
socket.emit('enviarMensaje', {
    //usuario: 'Andres',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log("respuesta server: ", resp);
});

//escucha información 
socket.on('enviarMensaje', function(mensaje) {
    console.log(mensaje);
})