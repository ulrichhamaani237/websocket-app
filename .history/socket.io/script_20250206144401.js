

const ws = io("ws://localhost:5000");

ws.on("connect", ()=>{
    console.log("Connection established with the server");
})
ws.emit("client-message", ())