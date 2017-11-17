const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.sendFile(__dirname+ '/frontend/index2.html')
});

app.use(express.static(__dirname + '/frontend'));


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});