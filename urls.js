const express = require('express');
const loginRouter = require('./routes/loginRouter');
const registerRouter = require('./routes/registerRouter');
// const categoryRouter = require('./routes/categoryRouter');
// const postRouter = require('./routes/postRouter');

const app = express();

app.use(express.json());
app.use('/user_account/login', loginRouter);
app.use('/user_account/register', registerRouter);
// app.use('/user', userRouter);
// app.use('/categories', categoryRouter);
// app.use('/post', postRouter);

module.exports = app;