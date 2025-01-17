// Each router file will deal with one type of route, in this case, quotes

// HTTP Request types include
// GET - Read data
// POST - Create data

// We will need to add some boilerplate to get this plumbing aligned again
const express = require('express');
const router = express.Router();
// Import our quotes file, which has been modules.exports -ed
let quoteList = require('../modules/quotes')

// We will create an endpoint to get these quotes back
// Endpoints are also called routes
// Sometimes we say we "query" the endpoint, or "hit" it to get data

// The first argument to app.get is the name of the route
// The second is an anonymous function
// Arrow function syntax is () => {}, params can go inside ()
// When our routes live in a router, we will use router.get/post/delete/etc
router.get("/", (req, res) => {
  console.log(
    "GET request to /quotes successful"
  );

  // When you want data sent back from your server, use res.send
  // res.send takes a payload - the thing you want to send back
  res.send(quoteList);
  // Could also choose to send back an HTTP status - 200 is default
  // res.sendStatus(404);
});

router.post("/", (req, res) => {
  console.log("POST to /quotes success! Body: ", req.body);
  // req.body is the data sent in the request lives
  let quote = req.body;
  // We have a quoteList that lives on the backend
  // Take the req.body and save it in the array
  console.log("Adding new quote:", quote);
  quoteList.push(quote);
  console.log("New array is:", quoteList);
  res.sendStatus(201);
});

router.delete('/', (req, res) => {
    console.log('DELETE request successful!'); 
});

// You've just built an API - Application Programming Interface.
// It is a way for two pieces of software to interact with each other

// We also need to module.exports this
module.exports = router;