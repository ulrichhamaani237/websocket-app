

const ws = io("ws://localhost:5000");

ws.on("connect", ()=>{
    console.log("Connection established with the server");
})
ws.emit("client-message", (event)=>{

    const text = event.data
    console.log('====================================');
    console.log(text);
    console.log('====================================');

})

ws.on("server-massage", (message)=>{