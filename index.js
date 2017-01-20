var express = require('express');
var app = express();
var cors = require('cors');
app.use(cors());

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.toLowerCase().slice(1);
}


function getUsername(url) {   
  var template = /(https?:)?(\/\/)?([a-zA-Z0-9-_]+\.[a-zA-Z0-9-_]+\.?[a-zA-Z]*)?(\/)?([a-zA-Z\@\.\_]+)(\/)?/;
  
  var usernameTemplate = url.match(template);
  console.log(usernameTemplate);
  var username;
  if(usernameTemplate[5].match(/\@/)) {
    username = usernameTemplate[5];
  } else {
    username = '@' + usernameTemplate[5];
  }
  return username;
  
}

app.get('/', function (req, res) { 
  res.send(getUsername(req.query.username)); 
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
