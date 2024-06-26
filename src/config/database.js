const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'imneli',
  password: 'pass123',
  database: 'MYSQLDB'
})

module.exports = db;

require('dotenv').config();

// modelo:

// module.exports = {
//   dialect: 'mariadb',
//   host: process.env.DATABASE_HOST,
//   port: process.env.DATABASE_PORT,
//   user: process.env.DATABASE_USERNAME,
//   password: process.env.DATABASE_PASSWORD,
//   database: process.env.DATABASE,
//   define: {
//     timestamps: true,
//     underscored: true,
//     underscoredAll: true,
//     'createdAt': 'created_at',
//     'updatedAt': 'updated_at'

//   },
//   dialectOptions: {
//     timezone: 'America/Sao_Paulo'
//   },
//   timezone: 'America/Sao_Paulo'

// }

require('dotenv').config();

module.exports = {
  /* SQLite */
  dialect: 'sqlite',
  storage: './db.sqlite',

  /* MySQL / MariaDB */
  // host: process.env.DATABASE_HOST,
  // port: process.env.DATABASE_PORT,
  // username: process.env.DATABASE_USERNAME,
  // password: process.env.DATABASE_PASSWORD,
  // database: process.env.DATABASE,
  // dialectOptions: {
  //   timezone: 'America/Sao_Paulo',
  // },
  // timezone: 'America/Sao_Paulo',

  /* ALL */
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
};

