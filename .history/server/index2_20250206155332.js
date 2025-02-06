const { createServer } = require("http");
const { Server } = require("socket.io");
const express = require('express')

const httpServer = createServer();

const io = new Server(httpServer, {
    cors: {
      origin: process.env.NODE_ENV === "production"
        ? false
        : [
            "http://localhost:5500",
            "http://127.0.0.1:5500",
            "http://127.0.0.1:51360"  // Ajout de l'origine du client
          ],
      methods: ["GET", "POST"]
    }
  });
  

io.on("connection", (socket) => {
  console.log("Connexion au client réussie :", socket.id.slice(0,4));

  // Envoi d'un message de bienvenue dès la connexion
  socket.emit("server-message", `Bienvenue, votre ID est ${socket.id.slice(0,4)}`);

  socket.on("client-message", (message) => {
    console.log("Message envoyer par le client :", message);
    // Ici, vous pouvez éventuellement renvoyer une réponse ou diffuser le message à d'autres clients
    const msg = `${socket.id.slice(0,4)}: ${message}`;
    io.emit("server-message", msg);
  });

  socket.on("close", () => {
    console.log("Le client a fermé la connexion");
  });
});

httpServer.listen(5000, () => {
  console.log("Le serveur écoute sur le port 5000");
});
