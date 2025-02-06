const socket = io("http://localhost:5000");

socket.on("connect", () => {
    console.log("Connection established with the server");
});

document.getElementById('form').addEventListener('submit', (event) => {
    event.preventDefault();
    const input = document.getElementById('input');
    const message = input.value;
    socket.emit("client-message", message);
    input.value = '';
});

socket.on("server-message", (message) => {
    const li = document.createElement("li");
    li.textContent = ` ${socket.id}: message`;
    document.getElementById('ulmsg').appendChild(li);
    console.log("Message depuis le server", message);
});

socket.on("disconnect", () => {
    console.log("Server has closed the connection");
});