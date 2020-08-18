var express = require('express');
var app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("listening on " + PORT);
});

app.get('/', function(req, res){
  res.send({ text: 'This is testing' });
})