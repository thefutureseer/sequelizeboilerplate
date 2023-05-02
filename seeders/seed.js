const sequelize = require('../config/sequelize');

const User = require('./models/User');

const newUser = User.build({
  name: 'John Doe',
  email: 'johndoe@example.com',
  password: 'password123',
  religion_id: 1
});

newUser.save()
  .then((savedUser) => {
    console.log('New user created:', savedUser.toJSON());
  })
  .catch((error) => {
    console.error('Error creating user:', error);
  });

module.exports = newUser;