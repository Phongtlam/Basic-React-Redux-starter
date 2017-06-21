const app = require('./app');

// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('../database-mysql');
// var items = require('../database-mongo');


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`DeepSubs listening on port ${PORT}!`);
});
