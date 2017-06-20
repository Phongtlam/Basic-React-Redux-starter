const app = require('./app');

// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('../database-mysql');
// var items = require('../database-mongo');


const PORT = process.env.port || 3000;

const server = app.listen(PORT, () => {
  server.keepAliveTimeout = 0;
  console.log(`DeepSubs listening on port ${PORT}!`);
});
