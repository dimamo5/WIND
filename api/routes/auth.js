var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
const db = require('../database/query');
const SECRET = 'lapd';

router.post('/login', function (req, res) {
    if (!req.body.username || !req.body.password) {
        res.status(400).json({
            message: 'Missing username or password'
        });
        return;
    }
    db.login(req.body.username, req.body.password)
        .then((user) => {
            if (!user) {
                res.status(403).json({
                    message: 'Invalid username or password'
                });
                return;
            }

            var token = jwt.sign({
                id: user._id,
                username: user.username
            }, SECRET);
            res.json({
                message:'Success',
                token: token
            });

        })
});

router.post('/register', function (req, res) {
    if (!req.body.username || !req.body.password || !req.body.mail) {
        res.status(400).json({
            message: 'Missing parameters'
        });
        return;
    }
    db.register(req.body.username, req.body.password, req.body.mail)
        .then((user) => {
            if (!user) {
                res.status(500).json({
                    message: 'Server Error'
                });
                return;
            }

            var token = jwt.sign({
                id: user._id,
                username: user.username
            }, SECRET);
            res.json({
                message:'Success',
                token: token
            });

        })
});

function jwtverify(req, res, next) {

  // check header or url parameters or post parameters for token
    var token = req.body.token || req.query.token || req.headers['authorization'];

  // decode token
  if (token) {

    // verifies secret and checks exp
    jwt.verify(token, SECRET, function(err, decoded) {      
      if (err) {
        return res.status(403).json({message: 'Failed to authenticate token'});    
      } else {
        // if everything is good, save to request for use in other routes
        req.user = decoded;    
        next();
      }
    });

  } else {
    // if there is no token
    // return an error
    return res.status(400).send({ 
        message: 'No token provided' 
    });
    
  }
};


module.exports = router;
module.exports.jwtverify=jwtverify;