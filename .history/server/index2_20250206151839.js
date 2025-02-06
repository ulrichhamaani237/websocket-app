const { createServer } = require("http");
const { Server } = require("socket.io");

const httpServer = createServer();


io.on("connection", (socket) => {
  console.log("Connexion au client réussie :", socket.id);

  // Envoi d'un message de bienvenue dès la connexion
  socket.emit("server-message", `Bienvenue, votre ID est ${socket.id}`);

  socket.on("client-message", (message) => {
    console.log("Message reçu du client :", message);
    // Ici, vous pouvez éventuellement renvoyer une réponse ou diffuser le message à d'autres clients
    // Par exemple : io.emit("server-message", `Message de ${socket.id}: ${message}`);
  });

  socket.on("close", () => {
    console.log("Le client a fermé la connexion");
  });
});

httpServer.listen(5000, () => {
  console.log("Le serveur écoute sur le port 5000");
});
