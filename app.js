const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const app = express();

// Router
const categoriesRouter = require('./app/api/v1/categories/router');

const v1 = '/api/v1/cms';

// Midllewares Error
const notFoundMiddleware = require('./app/middlewares/not-found');
const handleErrorMiddleware = require('./app/middlewares/handler-error');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome Api Event',
    });
});

// Router API
app.use(v1, categoriesRouter);

// middlewares
app.use(notFoundMiddleware);
app.use(handleErrorMiddleware);


module.exports = app;
