const {createServer} = require("http")
const {Server} = require('socket.io')

const httpServer = createServer();
const io = Server(httpServer, {
    cors: {
        origin: process.env.NODE_ENV === "production" ? false : ["http://localhost:5500"],
    }
})

io.on('connection', ()=>{
    console.log("connection au client avec sussess");
    
})