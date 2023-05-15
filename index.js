//Sets up the dependances/packages/modules 
var http = require('http');
//Experemental module within the file system;
//Contains the date and time functions that get used later
var dateTime = require('./myfirstmodule');
var fileSystem = require('fs')

//Hosts the main loop
http.createServer(function (req, res) {
  
  //Reads the 'index.html' file within the 'src' folder
  fileSystem.readFile('./src/index.html', function(err, data) {

    //writes out the var 'data' it got from the .readFile
    //function; which is 'index.html'
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);

    //Date and Time shinanagins
    res.write("It is currentally " + dateTime.dateAndTime() + "<br>");

    if (dateTime.isItYourBirthday() == true) {
      res.write("It is your birthday!");
    } else {
      res.write("It is not your birthday.");
    }
    
    return res.end();
  });
}).listen(8080);  //listens to port 8080 to host the https