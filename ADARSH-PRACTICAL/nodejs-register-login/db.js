const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'easylearning.guru',
  user: 'kcc_student',
  password: 'Kccitm.edu.in1',
  database: 'kccStudent',
  port:' 3306'
});

module.exports = connection;