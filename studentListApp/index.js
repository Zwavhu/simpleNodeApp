'use strict'

let path = require('path');
let express = require('express');
let app = express();

//load body parser
let bodyParser = require('body-parser');

//loading our routers
let mainRouter = require('./mainRoutes.js');
let classRouter = require('./classRoutes.js')

//tell Express to use bodyParser for JSON and URL encoded form bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/cdn', express.static('public')); /* this will mount
your public directory to '/cdn'. i.e. your scripts folder
will be at /cdn/scripts */

//mounting our routers
app.use("/", mainRouter);
app.use("/class", classRouter);


app.listen(3000);
console.log("Express server running on port 3000");