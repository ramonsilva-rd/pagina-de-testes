var express = require('express');
var app = express();


app.use(function(req, res, next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept", );
  next();
});

app.use('/', express.static(__dirname));


app.listen(3010, () => {
  console.log(`Example app listening at http://localhost:3010`)
})
