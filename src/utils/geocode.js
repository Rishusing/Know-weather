const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address +'.json?access_token=pk.eyJ1IjoicmlzaHVzaW5naDg4IiwiYSI6ImNrcDI2d2k3ZDB4MWkybm52MGY0MHZldWkifQ.AD3CvAA30uj--Vy3WsGLXw&limit=1';
 
    request({url, json: true}, (error, response) =>{
        if(error){
            callback('Unable to connect to location service!', undefined)
        }else if((response.body.features).length === 0){
            callback('Unable to find location. Try another search.', undefined)
        }else{
            callback(undefined , {
                Longitude : response.body.features[0].center[0],
                Latitude : response.body.features[0].center[1],
                Location : response.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode