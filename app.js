// Nicolas Kaplan
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const app = express();

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const aboutRouter = require('./routes/aboutRouter');
const projectsRouter = require('./routes/projectsRouter');
const servicesRouter = require('./routes/servicesRouter');
const contactRouter = require('./routes/contactRouter'); 

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/about', aboutRouter);
app.use('/projects', projectsRouter);
app.use('/services', servicesRouter);

app.use('/contact', contactRouter);


module.exports = app;