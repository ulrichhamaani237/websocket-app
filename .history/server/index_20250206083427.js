import {WebSocketServer} from "ws"

const wss = new WebSocketServer({port: 5000})

wss.on('connection', (socket)=>{
    console.log("Connection established on ");
    
    socket.on('')
})
console.log('Starting server on port 5000' );
