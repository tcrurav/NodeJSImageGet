const express = require("express");
const fs = require('fs');
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8100"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/image", (req, res) => {
  var img = fs.readFileSync('./images/bicycle.jpg'); 
  res.writeHead(200, { 'Content-Type': 'image/jpg' }); 
  res.end(img, 'binary');
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});