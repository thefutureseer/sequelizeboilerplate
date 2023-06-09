const router = require('express').Router();
const User = require('../models/User');

router.get('/api', (req, res) => {
 User.findAll({}).then(
  user => {
    console.log(user.name);
    res.json(user);
  }
  ).catch((err) => {
    console.log(err);
    res.status(500).json(err);
  });
})

//create user
router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);
    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;