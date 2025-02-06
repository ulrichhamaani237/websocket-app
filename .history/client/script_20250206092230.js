const ws = new WebSocket('ws://localhost:5000');

ws.onopen = () => {
    console.log('Connection established with the server');
};

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

document.getElementById('form').addEventListener('submit', (event) => {
    event.preventDefault();
    const input = document.getElementById('input');
    const message = input.value;
    ws.send(message);
    input.value = '';
});