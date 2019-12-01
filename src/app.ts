import * as socketio from "socket.io";

 var greet = (name:string): string => {
    return `Hello ${name}!`;
}

console.log(greet('Happy Holidays!!'));