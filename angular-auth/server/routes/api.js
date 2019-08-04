const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const User = require('../models/user');
const RefreshToken = require('../models/refreshToken');

const mongoose = require('mongoose');
const keys = require('../../config/dev');

const refreshTokenLife = '60s';
const accessTokenLife = '10s';

mongoose.connect(keys.mongoURI, err => {
  if (err) {
    console.error('Error!' + err);
  } else {
    console.log('Connected to mongodb');
  }
});

function saveRefreshToken(refreshToken) {
  let refreshTokenForDB = new RefreshToken({
    refreshToken: refreshToken,
    isValid: true
  });
  refreshTokenForDB.save();
}

function verifyToken(req, res, next) {
  if (!req.headers.authorization) {
    return res.status(401).send('Unauthorized request');
  }
  let token = req.headers.authorization.split(' ')[1];
  if (token === 'null') {
    return res.status(401).send('Unauthorized request');
  }
  jwt.verify(token, 'secretKey', (err, decoded) => {
    if (err) {
      if (err.name === 'TokenExpiredError') {
        return res.status(200).send({ message: 'expired access token' });
      }
      return res.status(401).send('Unauthorized request');
    } else {
      req.userId = decoded.subject;
      next();
    }
  });
}

router.get('/', (req, res) => {
  res.send('From API route');
});

router.get('/isLoggedIn', (req, res) => {
  if (!req.headers.authorization) {
    return res.send(false);
  }
  let token = req.headers.authorization.split(' ')[1];
  if (token === 'null') {
    return res.send(false);
  }
  jwt.verify(token, 'secretKey', (err, decoded) => {
    if (err) {
      return res.send(false);
    } else {
      return res.send(true);
    }
  });
});

router.post('/register', (req, res) => {
  console.log(req.body);
  let userData = req.body;
  let user = new User(userData);
  user.save((error, registeredUser) => {
    if (error) {
      console.log(error);
    } else {
      let payload = { subject: registeredUser._id };
      let accessToken = jwt.sign(payload, 'secretKey', {
        expiresIn: accessTokenLife
      });
      let refreshToken = jwt.sign(payload, 'refreshTokenKey', {
        expiresIn: refreshTokenLife
      });

      saveRefreshToken(refreshToken);

      res.status(200).send({ accessToken, refreshToken });
    }
  });
});

router.post('/login', (req, res) => {
  let userData = req.body;
  User.findOne({ email: userData.email }, (error, user) => {
    if (error) {
      console.log(error);
    } else {
      if (!user) {
        res.status(401).send('invalid email');
      } else if (user.password !== userData.password) {
        res.status(401).send('invalid password');
      } else {
        let payload = { subject: user._id };
        let accessToken = jwt.sign(payload, 'secretKey', {
          expiresIn: accessTokenLife
        });
        let refreshToken = jwt.sign(payload, 'refreshTokenKey', {
          expiresIn: '90s'
        });

        saveRefreshToken(refreshToken);

        res.status(200).send({ accessToken, refreshToken });
      }
    }
  });
});

router.post('/refreshToken', (req, res) => {
  // verify token is not blacklisted.
  RefreshToken.findOne(
    { refreshToken: req.body.refreshToken },
    (error, refreshTokenForDB) => {
      if (!refreshTokenForDB.isValid) {
        return res.status(401).send('Unauthorized request');
      }

      console.log('refresh token is still valid');

      // verify the refreshToken.
      jwt.verify(req.body.refreshToken, 'refreshTokenKey', (err, decoded) => {
        if (err) {
          return res.status(401).send('Unauthorized request');
        } else {
          console.log('refreshing access token...');
          let accessToken = jwt.sign(
            { subject: decoded.subject },
            'secretKey',
            {
              expiresIn: accessTokenLife
            }
          );
          res.status(200).send({ accessToken });
        }
      });
    }
  );
});

router.get('/applications', (req, res) => {
  let applications = [
    { _id: '1', name: 'Linux App', description: 'des', date: '2019-7-24' },
    { _id: '2', name: 'Centos App', description: 'des', date: '2019-7-24' }
  ];
  res.json(applications);
});

router.get('/special-app', verifyToken, (req, res) => {
  let events = [
    {
      _id: '1',
      name: 'Downloaded windows app',
      description: 'des',
      date: '2019-7-24'
    },
    {
      _id: '2',
      name: 'Downloaded linux app',
      description: 'des',
      date: '2019-7-24'
    }
  ];
  res.json(events);
});

module.exports = router;
