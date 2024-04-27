var soap = require('soap');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var postUser = require('./controllers').post_user;
var getUser = require('./controllers').get_user;

var service = {
    ws: {
        wsSoapPort: {
            post_user: postUser,
            get_user: getUser
            }
        }
};


var xml = require('fs').readFileSync('service.wsdl', 'utf8');

app.use(bodyParser.raw({type: function(){return true;}, limit: '5mb'}));
app.listen(3010, function(){
    soap.listen(app, '/wsdl', service, xml, function(){
        console.log('server initialized');
    });

});