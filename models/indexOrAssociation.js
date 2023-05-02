//sequelize model association
//bring in all the models to connect together
const User = require('./User');
const Religions = require('./Religions');

//User has one religion, 
User.belongsTo(Religions, {
  foreignKey: 'religion_id'
});

//religion has many Users
Religions.hasMany(User, {
  foreignKey: 'religion_id'
})

//export all the models in an object

module.exports = {
  User,
  Religions
}