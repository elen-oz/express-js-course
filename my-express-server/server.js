//jshint esversion:6

const express = require('express');
const app = express();

app.get('/', (request, response) => {
  response.send('<h1>hello</h1><p>how are you?</p>');
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
