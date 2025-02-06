const { createServer } = require("http");
const { Server } = require("socket.io");

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
