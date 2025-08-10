const EventEmitter = require("events");
const { constrainedMemory } = require("process");

console.log('Welcome to the chat app');

class ChatRoom extends EventEmitter {
  constructor() {
    super()
    this.users = new Set();
  }

  join(user) {
    this.users.add(user)
    this.emit('join', user);
  }

  sendMessage(user, messgae) {
    if (this.users.has(user)) {
      this.emit('message', user, messgae);
    } else {
      console.log(`${user} is not in chat.`);
    }
  }

  leaveChat(user) {
    if (this.users.has(user)) {
      this.users.delete(user);
      this.emit('logout', user);
    } else {
      console.log(`${user} is not in the chat.\n`);
    }
  }
}

module.exports = ChatRoom;

