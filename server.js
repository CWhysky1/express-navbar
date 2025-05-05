// server.js
//
const express = require("express");
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;

// add any necessary code you'd want to!

//app.use()
//app.get(`/test`, (req, res) => {
//    res.send('hello!!')
//})

//root
app.get('/', (req, res) => {
    // your nav bar is on index.html
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})


// Route for Climate Crisis
app.get("/climate-crisis", (req, res) => {
  //TODO add code!
  res.redirect("https://github.com/CWhysky1/ClimateChange");
});

// Route for Typesetting
app.get("/typesetting", (req, res) => {
  //TODO add code
  res.redirect("https://github.com/CWhysky1/typesetting");
  
});

// Route for Four Algorithms
app.get("/four-algorithms", (req, res) => {
  //TODO add code
  res.redirect("https://github.com/CWhysky1/task1");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});