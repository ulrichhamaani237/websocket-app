const socket = io("http://localhost:5000");

socket.on("connect", () => {
  console.log("Connexion établie avec le serveur");
});

document.getElementById("form").addEventListener("submit", (event) => {
  event.preventDefault();
  const input = document.getElementById("message"); // Utilisation de l'ID "message"
  const message = input.value;
  socket.emit("client-message", message);
  input.value = "";
});


// recuperation du lessage revonant du serveur

socket.on("server-message", (message) => {
  const li = document.createElement("li");
  // Affichage de l'ID du socket et du message reçu
  li.textContent = `${socket.id.slice(0, 4)}:${message}`;
  document.getElementById("ulmsg").appendChild(li);
  console.log("Message reçu depuis le serveur :", message);
});

socket.on("disconnect", () => {
  console.log("Le serveur a fermé la connexion");
});
