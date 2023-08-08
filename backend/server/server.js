//require express library
const express = require('express');

const app = express();

//create a port to connect with
const port = 8787;
app.listen(port, () =>
  console.log(`Server listening at http://localhost:${port}`)
);
