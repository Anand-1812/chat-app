const ChatRoom = require('./chatRoom.js');

const chat = new ChatRoom();

chat.on('join', (user) => {
  console.log(`${user} has joined the chat.\n`);
});


chat.on('message', (user, message) => {
  console.log(`${user} : ${message}.\n`);
});


chat.on('join', (user) => {
  console.log(`${user} has joined the chat.\n`);
});
