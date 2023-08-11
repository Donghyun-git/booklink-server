const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const cors = require('cors');
const cron = require('node-cron');
const { connectToDatabase } = require('./database/db.js');
const { PORT, DB_HOST, DB_NAME } = require('./env.config');
const { errorHandler } = require('./middlewares/errorHandler');

//router
const indexRouter = require('./routes/indexRouter');
const libraryRouter = require('./routes/libraryRouter');

const origins = [
  'http://localhost:8800',
  'http://localhost:3000',
  'http://127.0.0.1:5174',
];
const corsOptions = {
  origin: origins,
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

connectToDatabase()
  .then(async () => {
    cron.schedule('0 0 * * *', async () => {
      console.log('도서관 서버 live...');
      // await deleteExpiredWithdrawnUsers();
    });
    app.use('/', indexRouter);
    app.listen(PORT, () => {
      console.log('PORT:', PORT);
      console.log('DB_HOST:', DB_HOST);
      console.log('DB_NAME:', DB_NAME);
      console.log(`SERVER IS RUNNING ON PORT:${PORT}`);
    });
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

app.use('/api/v1/libraries', libraryRouter);
app.use(errorHandler);
