const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 5000 });

server.on('connection', (socket) => {
    console.log("Connection established on ");

    socket.on('message', (message) => {
        // pour vérifier le message envoyé par le client
        console.log(`Message du client est ${message}...`);
        // pour renvoyer le même message au client
        socket.send(message);
    });

    // pour fermer la connexion avec le client
    socket.on('close', () => {
        console.log("le client a coupé la connexion ...");
    });
});

console.log('Starting server on port 5000');
