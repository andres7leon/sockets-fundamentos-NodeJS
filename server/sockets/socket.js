const { io } = require('../server')

io.on('connection', (client) => {
    console.log("usuario conectado");

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicación'
    })

    client.on('disconnect', () => {
        console.log("Usuario desconectado.");
    });

    //escuchar cliente

    client.on('enviarMensaje', (data, callback) => {

        console.log(data);

        client.broadcast.emit('enviarMensaje', data);

        // if (mensaje.usuario) {
        //     callback({
        //         respuesta: 'Todo salio BIEEEEN'
        //     });
        // } else {
        //     callback({
        //         respuesta: 'TODO SALIO MAAAAAAL'
        //     })
        // }

    });
})