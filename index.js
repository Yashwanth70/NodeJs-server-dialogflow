'use strict';

const express = require('express');
const bodyParser = require('body-parser');
var request = require('request');
const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.post('/getOrganizationDetails', function(req, res) {
    request.get({
          url: 'https://10to8.com/api/booking/v2/organisation/',
          headers: {
            'Authorization': 'Token rm5hjsDaSWhkWLX3cAP-FKvo7YEvWDH9YyMVF9cRrEGA5X3_t2uNTOVyhZqI'
          }
        }, function(error, response, body) {
            res.send(body)
    });
});



app.listen((process.env.PORT || 8000), function() {
    console.log("Server up and listening");
});
