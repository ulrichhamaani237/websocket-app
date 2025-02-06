const form = document.getElementById('form');
const input = document.getElementById('input');

const ws = new WebSocket("ws://localhost:5000")

ws.onopen = () =>{

const sendMessage = (e) =>{
    e.preventDefault();
 
    ws.send(input.value);
 }

 form.addEventListener("submit", sendMessage())
}   
}

 

ws.onmessage = async (message) =>{
 if (message.data instanceof Blob) {
    const text = await message.data.text();

    console.log('====================================');
    console.log(`Messsae recu depuis le server ${text} `);
    console.log('====================================');
 }else {
    console.log('====================================');
    console.log(`message depuis le se le server ${text}`);
    console.log('====================================');
 }

 ws.onclose = ()=>{
    console.log("le server closed");
    
 }
}