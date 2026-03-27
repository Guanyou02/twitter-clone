require('dotenv').config();

const app = require('./src/app');
const connectDB = require('./src/configs/db');

const port = process.env.PORT || 3000;

// Ensure DB is connected before starting the server
connectDB().then(() => {
  app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });
});