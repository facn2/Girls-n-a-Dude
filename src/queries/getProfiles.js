const dbConnection = require('../database/db_connection.js');

const getProfiles = cb => {
  console.log('hello');
  const getProfilesQuery = 'SELECT first_name, last_name, country, github, image FROM members;';
  dbConnection.query(getProfilesQuery, (err, res) => {
    if (err) {
      return cb(err);
    } else {
      // console.log("res.rows", res.rows);
      cb(null, res.rows);
    }
  })
}

module.exports = getProfiles;
