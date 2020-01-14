var express = require('express');
var router = express.Router();


let users = [
  { id: 1, name: "poop", age: "1 month" },
  { id: 2, name: "Hamster", age: "999" },
  { id: 3, name: "Toivo", age: "almost 4 yo" }
];


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('poop');
});

router.get('/get-all-users', function(req, res) {
  res.json(users);
});

router.get('/get-user-by-id/:id', function(req, res) {
    let userID = req.params.id
    let foundUser = users.filter(user => user.id == userID)
    
    res.json(foundUser)

});

module.exports = router;
