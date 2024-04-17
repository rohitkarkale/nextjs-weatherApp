var request = require('request')

var URL = 'http://ipinfo.io'
module.exports = function (callback) {

    request({
        url: URL,
        json: true
    }, function (error, response, body) {
        if (error) {
            callback('unable to find location');

        } else {
            callback(body);

        }
    })
}