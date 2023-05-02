const User = require('../models/User');

const users = [
  {
    name: 'John Doe',
    email: 'johndoe@example.com',
    password: 'password1',
    religion_id: 1
  },
  {
    name: 'Jane Doe',
    email: 'janedoe@example.com',
    password: 'password2',
    religion_id: 2
  },
  {
    name: 'Bob Smith',
    email: 'bobsmith@example.com',
    password: 'password3',
    religion_id: 1
  }
];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await User.bulkCreate(users);
  },

  down: async (queryInterface, Sequelize) => {
    await User.destroy({ where: {} });
  }
};