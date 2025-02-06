const {createServer} = require("http")
const {Server} = require('socket.io')

const httpServer = createServer();
const io = Server(httpServer, {
    cors: {
        origin: process.env.NODE_ENV === "production" ? false : ["http://localhost:5500"],
    }
})

io.on('connection', (socket)=>{
    console.log("connection au client avec succes:", socket.id);
    socket.on('client-message', (message)=>{
        console.log("Messahe depuis le client", message);    
    })
    socket.emit("server-massage", message)

    socket.on("close", ()=>{
        console.log("Le client a couper la connexion de client");
        
    })
    
})

httpServer.listen(5000)