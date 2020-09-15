import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import mediasRouter from './api/medias';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/medias', mediasRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  return res.status(404).end()
});

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  const env = req.app.get('env')
  const error = env === 'development' ? err : {};

  if (env === 'development') console.log('ERROR: ', err)

  // render the error page
  res.status(err.status || 500).json(error)
});

export default app
