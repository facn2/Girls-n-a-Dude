const express = require('express');
const path = require('path');
const router = express.Router();

const getProfiles = require('../queries/getProfiles.js');
router.get('/', (request, response) => {
  getProfiles((err, data) => {
    if (err) {
      res.send('<h1>Sorry, there was a problem getting the data</h1>');
      console.log("err", err);
    } else {
      console.log(data[0].image);
      return response.render('home', {
        data
      });
    }
  })
});


module.exports = router;
