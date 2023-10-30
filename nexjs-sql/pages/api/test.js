// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "wordpressuser",
    password: "=[-p0o9i8U",
    database: "wordpress"
 });
 
export default function handler(req, res) {
    con.connect(function (err) {
        if (err) throw err;
        con.query("SELECT * FROM wp_posts", function (err, result, fields) {
           if (err) throw err;
           res.json({ result })
        console.log(result);
        });
        console.log("Connected!");
     });
    //res.status(200).json({ name: 'John Doe' })
  }
  