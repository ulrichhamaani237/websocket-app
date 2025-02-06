import {WebSocketServer} from "ws"

const wss = new WebSocketServer({port: 5000})

wss.on('connection', (socket)=>{
    console.log("Connection established on ");
    
    socket.on('message', (message)=>{
        // pour veirifier le message envoyer par le client
        console.log(`Message du lcient est ${message}...`);
// pour renvoyer le meme message au client
        socket.send(message);
        
    })

    // pour fermer la connection avec le client

    socket.on('close',()=>{
        console.log("le clent a couper la connexion ...");
        
    })
})
console.log('Starting server on port 5000' );
