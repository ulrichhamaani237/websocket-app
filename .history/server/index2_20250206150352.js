const {createServer} = require("http")
const {Server} = require('socket.io')

const httpServer = createServer();
const io = new Server(httpServer, {
    cors: {
        origin: process.env.NODE_ENV === "production" ? false : ["http://localhost:5500","127.0.0"],
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

httpServer.listen(5000, ()=>{
    console.log("server listen on port 5000");
    
})