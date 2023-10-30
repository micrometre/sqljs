const Sequelize = require("sequelize");
const sequelize = new Sequelize(
 'wordpress',
 'wordpressuser',
 '=[-p0o9i8U',
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