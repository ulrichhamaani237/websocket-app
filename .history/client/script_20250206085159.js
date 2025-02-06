const form = document.querySelector('form');
const input = document.querySelector('input');

const ws = new WebSocket('ws://localhost:5000')

ws.onopen = (e) =>{
 e.preventDefault();

 if(input.value){
    ws.send(input.value);
 }
}