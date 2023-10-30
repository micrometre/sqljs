var mysql = require('mysql');
const express = require('express')
const app = express()
const port = 3000
var con = mysql.createConnection({
   host: "localhost",
   user: "wordpressuser",
   password: "=[-p0o9i8U",
   database: "wordpress"
});

app.get('/', (req, res) => {






   
   con.connect(function (err) {
      if (err) throw err;
      con.query("SELECT * FROM wp_posts", function (err, result, fields) {
         if (err) throw err;
         res.json({ "message": "success", result })
      console.log(result);
      });
      console.log("Connected!");
   });
})




app.listen(port, () => {
   console.log(`listening on port ${port}`)
})