const data = {
  messages: [
    {
      id: '1234',
      from: 'anya@ivanova',
      subject: 'Hello from Anya',
      body: 'Long message body here',
      received: 1553400000,
    },
  ],

  addMessage(message) {
    this.messages.push(message);
  },

  clearMessages() {
    this.messages = [this.messages.shift()];
  },
};

module.exports = data;
