const {createServer} = require("http")
const {Server} = require('socket.io')

const httpServer = createServer();
const io = Server(httpServer, {
    cors: {
        origin: process.env.NODE_ENV === "production" ? f
    }
})