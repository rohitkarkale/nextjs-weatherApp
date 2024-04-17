var request = require('request')


module.exports= function(location,callback){
 var URL=`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=b3aaa0b3323c0baab93aff38f75b44cb&units=metric`

request({
    url: URL,
    json: true
}, function(error,response,body){
    if(error){
        callback('something went wrong');
        
    }else {
        callback(`Its  ${body.main.temp}  and humidity ${body.main.humidity}  in ${body.name}`);
        
    }
})
}
