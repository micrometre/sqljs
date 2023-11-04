// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "wordpressuser",
    password: "=[-p0o9i8U",
    database: "wordpress"
 });
 
export default function handler(req, res) {
      con.query("SELECT ID, guid, post_type, post_title, post_content, post_excerpt, post_status FROM wp_posts WHERE post_type = 'product' AND post_status = 'publish'", function (err, result, fields) {
           if (err) throw err;
           res.json({ result })
        console.log(result);
        });
        console.log("Connected!");
    //res.status(200).json({ name: 'John Doe' })
  }
  