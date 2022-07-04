var express = require('express');
var router = express.Router();

/* GET index page. */
router.get('/', function (req, res) {
  try {
    res.status(200).send("Index page");
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

/* GET teapot. */
router.get('/teapot', function (req, res) {
  try {
    res.status(418).send("I'm a teapot !");
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

module.exports = router;
