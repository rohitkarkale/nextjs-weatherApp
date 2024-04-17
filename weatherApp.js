var weather = require('./Weather.js')
var location = require('./location.js')
var argv = require('yargs').option('location', {
    description: 'Location to get the weather for city',
    demand: false,
    alias: 'l',
    type: 'string'
}).help('help').argv

if (typeof argv.l === 'string' && argv.l.length > 0) {
    console.log('Location Recieved from client');
    weather(argv.l, function (callback) {
        console.log(callback);

    })
} else {
    console.log('No City Found....  detecting the location!!!!!!!!!!!');
    location(function (location) {
        if (location) {
            weather(location.city, function (callback) {
                console.log(callback);
            })
        }
    })
}