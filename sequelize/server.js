const Sequelize = require("sequelize");
const sequelize = new Sequelize(
 'wordpress',
 'wordpressuser',
 'aa09dd995C72_5355a598fc7D8ab1230a',
  {
    host: 'localhost',
    dialect: 'mysql'
  }
);

sequelize.authenticate().then(() => {
   console.log('Connection has been established successfully.');
}).catch((error) => {
   console.error('Unable to connect to the database: ', error);
});