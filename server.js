const express = require('express');
const path = require('path');

const app = express();
const server = require('http').createServer(app);

//const socket = require('socket.io')(server);

app.use(express.static(path.join(__dirname,'Views')));
app.get('/',(req,res) => {
    res.render('index.html');

});

io.on('connection', () =>{
    
});

server.listen(5050 , () =>{
    console.log(`start listening on port 5050`);
});