// We are putting this in its own module file, so it is isolated from our server files

// Objects use key-value pairs
let quoteList = [
    {
      text: "I'm not going to school just for the academics - I wanted to share ideas, to be around people who are passionate about learning.",
      author: "Emma Watson",
    },
    {
      text: "Remember there's no such thing as a small act of kindness. Every act creates a ripple with no logical end.",
      author: "Scott Adams",
    },
    {
      text: "Intelligence plus character-that is the goal of true education.",
      author: "Martin Luther King, Jr.",
    },
  ];
  
  // This is required to make it available to our other files!
  module.exports = quoteList;