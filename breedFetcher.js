const request = require('request');
const fs = require('fs');

const args = process.argv.slice(2);
breed = args[0];

request("https://api.thecatapi.com/v1/breeds/search/?q=" + breed, (error, request, body) => {
    if (body === "[]") {    
        console.log(error);
        return console.log("No such breed")
    } else {
        console.log(JSON.parse(body)[0].description);
    }
});



