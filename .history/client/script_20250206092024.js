const form = document.getElementById('form');
const input = document.getElementById('input');

const ws = new WebSocket('ws://localhost:5000');

ws.onopen = () => {
    console.log('Connection established with the server');
};

const sendMessage = (e) => {
    e.preventDefault();
    ws.send("jean");
};

form.addEventListener("submit", sendMessage);

ws.onmessage = (event) => {
    const text = event.data;
    console.log('====================================');
    console.log(`message depuis le server: ${text}`);
    console.log('====================================');
};

ws.onclose = () => {
    console.log("le server closed");
};

ws.onerror = (error) => {
    console.error(`WebSocket error: ${error}`);
};