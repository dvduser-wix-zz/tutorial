var fs = require('fs');
var moment = require('moment');

var file = fs.readFile('./names.json', function(error, data) {
  if(error) {
    console.error('Failed to load file', error);
  } else {
    var json = JSON.parse(data.toString())
    for (var i = 0; i < json.length; i++) {
      console.log(json[i]);
    }
  }
});