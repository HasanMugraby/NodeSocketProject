const express = require('express');
const path = require('path');

const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.use(express.static(path.join(__dirname,'Views')));
app.get('/',(_,res) => {
    res.render('index.html');
});

io.on('connection', (socket) =>{
    console.log('connection is opened');
    socket.on('send-message',(data) =>{
        io.sockets.emit('send-message',data);
    });
});

server.listen(5050 , () =>{
    console.log(`start listening on port 5050`);
});