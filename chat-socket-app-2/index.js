const path = require('path')
const express = require('express')
const http = require('http')
const socketio = require('socket.io')
const { generateMsg } = require('./utilities')

const app = express()
const server = http.createServer(app)
const io = socketio(server)

const port = process.env.PORT || 8080
const publicDirPath = path.join(__dirname, './public')

app.use(express.static(publicDirPath))

io.on('connection', socket => {
    console.log('New websocket connection');
    socket.on('join', ({ username, room}) => {
        socket.join(room);
        socket.emit('message', generateMsg('Welcome to the Chat App'))
        socket.broadcast.to(room).emit('message', generateMsg(`${username} has joined!`));
    })
    
    socket.on('sendMessage', (message, callback) => {
        io.to('Bhopal').emit('message', generateMsg(message))
        callback()
    })

    socket.on('disconnect', () => {
        io.emit('message', generateMsg('A user has left'))
    })
})

server.listen(port, () => console.log(`Server is up on port ${port}`));