const express = require('express');
const path = require('path');
const router = express.Router();
const getProfiles = require('../queries/getProfiles.js');
const home = require('../views/home');

router.get('/', (req, res) => {
  getProfiles((err, res) => {
    if (err) {
  		response.writeHead(500, 'Content-Type:text/html');
  		response.end('<h1>Sorry, there was a problem getting the data</h1>');
  	  console.log("err", err);
  	} else {
  		const data = JSON.stringify(res);
  		response.writeHead(200, 'Content-Type:application/json');
      console.log("data", data);
  		response.end(data);
  	}
  })
   res.render('home');
});

// user profile route

// router.get('/profile', (req, res) => {
//
// });

module.exports = router;
