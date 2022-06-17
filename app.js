const express = require('express');
const bodyParser = require('body-parser')
const userRoute = require('./route/user.route')
const authorRoute = require('./route/author.route')
const categoryRoute = require('./route/category.route')
const bookRoute = require('./route/book.route')

require('dotenv').config()

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/',userRoute);
app.use('/author',authorRoute);
app.use('/category',categoryRoute);
app.use('/book',bookRoute);


app.listen(process.env.PORT, (request, respond) => {
  console.log(`Server is listening on ${process.env.PORT}`);
});