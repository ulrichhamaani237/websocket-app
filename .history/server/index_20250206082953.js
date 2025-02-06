import {WebSocketServer} from "ws"

const wss = new WebSocketServer({port: 5000})

console.log('Starting server ');
