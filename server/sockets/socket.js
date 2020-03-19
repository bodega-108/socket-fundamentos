const { io } = require('../server');

io.on('connection',(client)=>{
    console.log('Usuario Contectado');


    client.emit('enviarMensaje',{
        usuario: 'Admin',
        mensaje: 'Bienvenido Al servidor'
    })

    client.on('disconnect',()=>{
        console.log('Usuario Desconectado')
    });

    //Escuchar al cliente
    client.on('enviarMensaje',(data, callback)=>{
        console.log(data);

        client.broadcast.emit('enviarMensaje',data);

    });
});
