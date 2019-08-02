'use strict';

const express = require('express');
const auth = require('../auth/middleware.js');
const Role = require('../auth/roles-model.js');

const router = express.Router();

router.get('/home', (req, res) => {
  res.status(200).send('Welcome');
});

router.get('/profile', (req, res) => {
  res.status(200).send('Welcome Home');
});

router.get('/document', auth('read'), (req, res) => {
  res.status(200).send('You can read');
});

router.get('/add', auth('create'), (req, res) => {
  res.status(200).send('You can create');
});

router.get('/update', auth('update'), (req, res) => {
  res.status(200).send('You can update');
});

router.get('/delete', auth('delete'), (req, res) => {
  res.status(200).send('You can delete');
});

router.post('/roles', (req, res, next) => {
  let role = new Role(req.body);
  role.save().then( (role) => {
    res.send(role);
  }) .catch(next);
});

module.exports = router;
