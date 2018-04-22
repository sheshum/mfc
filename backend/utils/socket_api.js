


const generateMessage = require('./messages_api').generateMessage;

module.exports = ( io, socket ) => {
 
    socket.emit('new_message', {
        from: 'Admin',
        text: 'Welcome to chat app!'
    });

    socket.broadcast.emit('new_message', {
        from: 'Admin',
        text: 'New user joined.'
    });

    socket.on('send_message', function( message ) {
        io.emit('new_message', generateMessage( message.from, message.text ));
    });

    socket.on('disconnect', () => {
        console.log('User disconnected.');

    });
}