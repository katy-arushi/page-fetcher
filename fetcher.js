const fs = require('fs');
const request = require('request');

const pageURL = process.argv[2];
const filePath = process.argv[3];

request(pageURL, (error, response, body) => {
  let bodyData = body;

  if ((response !== undefined) && (response.statusCode === 200)) {
    fs.appendFile(filePath, bodyData, function(err) {
      if (err) {
        throw err;
      }
      console.log(`Downloaded and saved ${bodyData.length} bytes to ${filePath}`);
    });
  } else {
    console.log('Sorry, an error occured and the program must quit.');
    process.exit();
  }
});