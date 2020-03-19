

        var socket = io();

        socket.on('connect', function(){
            
            console.log('Conectado al Servidor')
        });
    //Escuchar la informacion
        socket.on('disconnect', function(){
        console.log('Perdimos conexion con el servidor')
    });
    //Enviar informacion
    socket.emit('enviarMensaje',{
        usuario :"Eduardo",
        mensaje : "Hola Mundo"
    })

    //escuchar informacion
    socket.on('enviarMensaje', function(respuesta){
        console.log('Servidor:', respuesta)
    })

