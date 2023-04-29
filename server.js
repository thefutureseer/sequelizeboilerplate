const express = require('express');
const { sequelize } = require('./models/User');
const apiIndex = require('./routes/index');

const app = express();

// Middleware for parsing JSON data
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
  //send to the browser
  res.send("hello sequelize!")
})
// Routes
app.use(apiIndex);

// Sync the models with the database
sequelize.sync({force: false})
  .then(() => {
    // Start the server
    app.listen(3000, () => {
      console.log('Server started on port 3000');
      console.log('Database sync complete');
  });
});