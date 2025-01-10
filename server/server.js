// Require express - gives us a function
const express = require("express");
// variables express, app, and port

// Create an instance of express by calling the function returned above - gives us an object
// defining a port (below)
const app = express();
const port = 5001;

// express static file serving - public is the folder name
app.use(express.static("server/public"));

// If we're POSTing data, we need to include this boilerplate
app.use(express.json());
// JavaScript Object Notation
// serialization, deserialization
// (above) method - use (method is a function, but it's associated with something else - like an object.)
// (above) Start up our server

// We need to provide a way to start up the server shown (below)
// function starts after the () - when server is startup then we're going to call 
// the function. Listening on port 5001. (below)
app.listen(port, () => {
  console.log("listening on port", port);
});


// Objects use key-value pairs
let quoteList = [
  { text: 'I\'m not going to school just for the academics - I wanted to share ideas, to be around people who are passionate about learning.', author: 'Emma Watson' },
  { text: 'Remember there\'s no such thing as a small act of kindness. Every act creates a ripple with no logical end.', author: 'Scott Adams' },
  { text: 'Intelligence plus character-that is the goal of true education.', author: 'Martin Luther King, Jr.' },
];

// we will create an endpoint to get these quotes back. 
// Routes (we will be defining a route)
// Sometimes we call it 'query endpoint'


// The first argument to app.get is the name of the route. 
//     '/quotes' is the route

// Anonymous function (below) no function name
app.get("/quotes", (request, res) => {
  console.log("Get request to /quotes successful");

    // When you want data sent back from your server, use response.send
    // Res.send takes a payload - the thing you want to send back
  res.send(quoteList)
  // res.sendStatus(404);
  // above - you can choose the specific code to be presented if needed

});

app.post("/quotes", (req, res) => {
  console.log("Post to /quotes success!");

  res.sendStatus(201);
 })
// The route about "/quotes" can be used more than once as long as there
// is a seperate 

// () => {}

// ^^^^ This is an API - Application Programming Interface


// HTTP Requests - The way that you interact with the internet.
// GET - Reading: Get information from the web
// POST


