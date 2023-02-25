'use strict'
const express = require("express");

// functions that verify activities before putting them in database
//const act = require('./activity');

// object that provides interface for express
const app = express();

// use this instead of the older body-parser
app.use(express.json());

// make all the files in 'public' available on the Web
app.use(express.static('public'))

// when there is nothing following the slash in the url, return the main page of the app.
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/index.html");
});

var database;

app.post("/update",async function(request,reponse){
  console.log("update");
  database=request.body;
})

app.get("/newest",async function(request,reponse){
  console.log("newest");
  response.send(database);
})