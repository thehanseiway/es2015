var fs = require('fs');

var profile = JSON.parse(fs.readFileSync("./profile.json", "utf8"));
var message = "My name is " + profile.name + " " + profile.lastname; 

fs.writeFileSync('./profiles/vlad.txt', message, 'utf8')