const request = require('request')

forecast = (latitude, longitude, callback) =>{

    const url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&appid=5054d1e1d6480c5c0a196ce7dd5bfba3&units=metric'
    request({url , json: true}, (error, response) => {
        if(error){
            callback('Unable to connect weather service', undefined)
        }
        else if(response.body.message){
            callback('Unable to find location',undefined)
        }
        else {
            
            callback(undefined, ' The temperature is ' + response.body.main.temp + ' and ' + response.body.weather[0].description)

        }
    })

}

module.exports = forecast