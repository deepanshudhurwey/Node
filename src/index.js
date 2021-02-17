const express = require('express')
const app = express()
const socketio = require('socket.io')
const http = require('http')
const server = http.createServer(app)
const path = require('path')
const Filter = require('bad-words')
const timestamp = new Date().getTime()
const publicpath = path.join(__dirname,'../public')
const PORT = process.env.PORT | 3000
const ioserver = socketio(server)
const { generatemessage} = require('./utils/messages')
const { addUser,removeUser,getUser,getUsersInRoom} = require('./utils/users')

app.use(express.static(publicpath))

ioserver.on('connection',(socket)=>{
    console.log('New connection establish')
    socket.on('join',({username,room}, callback)=>{
        const {user, error} = addUser({id: socket.id, username, room})
        if(error){
            return callback(error)
        }
        socket.join(user.room)
        // once client emit join methon with obj property , server will listen that and use socket.join() method to join that perticular room
        //socket.emit, io.emit, socket.broadcast.emit
        //nil ,io.to.emit,socket.boradcast.to.emit
        socket.emit('message', generatemessage('Admin', 'Welcome!'))
        socket.broadcast.to(user.room).emit('message', generatemessage('Admin',` ${user.username} has joined!`))  
        
        ioserver.to(user.room).emit('roomData',{
            room : user.room,
            users : getUsersInRoom(user.room)
        })
        
        callback()      
    })
  
    socket.on('messagefromC',(message, callback)=>{
        const user = getUser(socket.id)
        const filter = new Filter()
        if(filter.isProfane(message)){
            return callback('Profnity is not allowed!')
        }
        ioserver.to(user.room).emit('message',generatemessage(user.username,message)) 
        callback()   
    })
    
    socket.on('disconnect', () => {
        const user = removeUser(socket.id)
        if(user)
        {
            ioserver.to(user.room).emit('message',generatemessage('Admin',`${user.username} has left the room`))
            ioserver.to(user.room).emit('roomData',{
                room : user.room,
                users : getUsersInRoom(user.room)
            })
        
        }
    })
})
server.listen(PORT, ()=>{
    console.log("Web Chat application is running on PORT ")
})

