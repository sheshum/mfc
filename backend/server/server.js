const path = require('path');
const colors = require('colors');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const socketIO = require('socket.io');


const { PORT, db } = require('./config');
const clog = require('../utils/utils').clog;
const socket_api = require('../utils/socket_api');
const api = require('./routes/api');



const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json({limit: '50mb'}));
app.use('/api', api);

app.use(express.static(path.join(__dirname, '../../frontend')));


app.get('/', ( req, res ) => {
        res.sendFile(path.join( __dirname, '../../frontend/index.html' ));
});





const URL = `http://localhost:${PORT}`;


const server = require('http').createServer( app );
const io = socketIO( server );

io.on('connection', ( socket ) => {
    clog('User connected.')
    socket_api( io, socket );
    
});

mongoose.connect(db)
.then( () => {
    clog('Connected to dbmfc database.');
    server.listen(PORT, () => {
        clog(colors.cyan(`Server listening on port ${PORT}.\nClick the link ${URL} to open in browser.`));
    
    });

}).catch( e => {
    clog('Unable to connect. Check if the url is correct or if the db server is running.');
})

 