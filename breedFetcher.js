const request = require('request');
const fs = require('fs');

const fetchBreedDescription = function(breedName, callback) {
    request("https://api.thecatapi.com/v1/breeds/search/?q=" + breedName, (error, request, body) => {
    let data = JSON.parse(body);
    if (data.length === 0) {
    // if (body === null) {
        callback("Not a Breed", data);
    } else {
        callback(null, data[0].description.trim());
    }
    });
};

module.exports = { fetchBreedDescription };





