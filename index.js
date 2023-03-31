// console.log("santosh")

//const something=require('somelibrary)
const express = require('express');
const { HOF } = require('./middleware/myMiddleware')
require('dotenv').config();

const app = express();


//lets define the route
app.get('/get_students', HOF, (req, res) => {

    res.json({
        "msg": `Hello ${req.query.fullDetail}`
    })


})


app.listen(4000)