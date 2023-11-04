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
      con.query("SELECT ID, guid, post_type, post_title, post_content, post_excerpt, post_status FROM wp_posts WHERE post_type = 'product' AND post_status = 'publish'", function (err, result, fields) {
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