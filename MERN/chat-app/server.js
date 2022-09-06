const express = require('express');
const app = express();
const cors = require('cors');
const port = 8000;

const server = app.listen(port, () =>
    console.log(`The server is all fired up on port ${port}`)
);

const io = require('socket.io')(server, {cors:true});

io.on('connection', socket => {
        console.log(socket.id)
        console.log('Nice to meet you (shakes hand)')
        socket.on('event_from_client', data => {
        socket.broadcast.emit('send_data_to_all_other_clients', data)
    });
});