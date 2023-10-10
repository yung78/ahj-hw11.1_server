const { faker } = require('@faker-js/faker');
const data = require('../db/db.js');

const messageBakery = () => {
  setInterval(() => {
    const freshMessage = {
      id: faker.string.uuid(),
      from: faker.internet.email({
        provider: 'mail.ru',
        allowSpecialCharacters: false,
      }),
      subject: faker.lorem.words({ min: 2, max: 4 }),
      body: faker.lorem.lines({ min: 2, max: 4 }),
      recived: Date.now(),
    };

    data.addMessage(freshMessage);

    if (data.messages.length > 5) {

      data.clearMessages();
    }
  }, 15000);
};

module.exports = messageBakery;
