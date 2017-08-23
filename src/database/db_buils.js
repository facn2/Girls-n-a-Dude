const fs = require('fs');

const dbConnection = require('./db_connection.js');

const buildScript = fs.readFileSync(`${__dirname}/db_build.sql`).toString();

dbConnection.query(buildScript, (err, res) => {
  if (err) {
    console.log('err with build.js');
    throw err;
  }
  console.log('table create', res);
});
