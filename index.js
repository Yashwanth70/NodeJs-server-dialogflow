'use strict';

const express = require('express');
const bodyParser = require('body-parser');
var request = require('request');
const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.post('/', function(req, res) {
    if(req.body.result.parameters.text == "organisation"){
        request.get({
              url: 'https://10to8.com/api/booking/v2/organisation/',
              headers: {
                'Authorization': 'Token'
              }
            }, function(error, response, body) {
                var info = JSON.parse(body);
                console.log(info);
                var resp = "Organisation Name is :" + info[0].name;
                resp += ",website is : " +  info[0].website;
                //var reqy = req.body.result && req.body.result.parameters && req.body.result.parameters.echoText ? req.body.result.parameters.echoText : "Seems like some problem. Speak again."
                res.json({
                    speech: resp,
                    displayText: resp,
                    source: 'webhook'
            });
        });
    }else if(req.body.result.parameters.text == "services"){
        request.get({
              url: 'https://10to8.com/api/booking/v2/service/',
              headers: {
                'Authorization': 'Token'
              }
            }, function(error, response, body) {
                var info = JSON.parse(body);
                console.log(info);
                var resp = "Organisation Name is :" + info[0].name;
                resp += ",website is : " +  info[0].website;
                //var reqy = req.body.result && req.body.result.parameters && req.body.result.parameters.echoText ? req.body.result.parameters.echoText : "Seems like some problem. Speak again."
                res.json({
                    speech: resp,
                    displayText: resp,
                    source: 'webhook'
            });
        });
    }
});



app.listen((process.env.PORT || 8000), function() {
    console.log("Server up and listening");
});
