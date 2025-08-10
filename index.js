const ChatRoom = require('./chatRoom.js');

const chat = new ChatRoom();

chat.on('join', (user) => {
  console.log(`${user} has joined the chat.\n`);
});


chat.on('message', (user, message) => {
  console.log(`${user} : ${message}.\n`);
});


chat.on('logout', (user) => {
  console.log(`${user} has left the chat.\n`);
});

// simulating the chat

chat.join('Alice')
chat.join('Bob');

chat.sendMessage('Alice', "Hey Alice, hello to everyone.");
chat.sendMessage('Bob', "Hey bob, hello to everyone.");

chat.leaveChat('Alice\n');
chat.sendMessage('Alice', "this message won't sent");
chat.leaveChat('Bob');


