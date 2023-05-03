const User = require('../models/User');

const users = [
  {
    name: 'John Doe2',
    email: 'johndoe2@example.com',
    password: 'password12',
    religion_id: 1
  },
  {
    name: 'Jane Doe2',
    email: 'janedoe2@example.com',
    password: 'password22',
    religion_id: 2
  },
  {
    name: 'Bob Smith2',
    email: 'bobsmith2@example.com',
    password: 'password32',
    religion_id: 1
  }
];

const createUser = ()=>{
 User.bulkCreate(users);
};


module.exports = createUser;