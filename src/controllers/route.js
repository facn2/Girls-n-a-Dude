const express = require('express');
const path = require('path');
const router = express.Router();

const home = require('../views/home');

router.get('/', (req, res) => {
   res.render('home');
});

// This is going to be our user profile route

// router.get('/', (req, res) => {
//    res.render('home', { activePage: {home: true}});
// });


module.exports = router;
