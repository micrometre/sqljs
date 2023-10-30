var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "wordpressuser",
  password: "=[-p0o9i8U",
  database: "wordpress"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM wp_posts", function (err, result, fields) {
   if (err) throw err;
   console.log(result);
 });
  console.log("Connected!");
});
