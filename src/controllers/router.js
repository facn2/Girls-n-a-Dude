const express = require('express');
const path = require('path');
const router = express.Router();
const getProfiles = require('../queries/getProfiles.js');
const home = require('../views/home');
router.get('/', (req, res) => {
  getProfiles((err, data) => {
    console.log("res", data);
    if (err) {
  		res.send('<h1>Sorry, there was a problem getting the data</h1>');
  	  console.log("err", err);
  	} else {
  		const dataObj = JSON.stringify(data);
      res.render('home', {members: dataObj});
  	}
  })
});

// user profile route

// router.get('/profile', (req, res) => {
//
// });

module.exports = router;
