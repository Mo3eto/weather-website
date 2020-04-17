const request = require('request')
const getWeather = (latitude, longitude, callback) =>{
    const url = 'https://api.openweathermap.org/data/2.5/onecall?lat='+encodeURIComponent(latitude)+'&lon='+encodeURIComponent(longitude)+'&appid=3a7f13ba3977ea38d00775c21dda93de' 
    request( {url,json:true}, (error,response,body) => { //url: property shorthand 
         if(error) 
         {
              callback('Unable To Connect To Weather Services',undefined) 
         } 
         else if(body.message)
         { 
            callback('Wrong Coordination',undefined)   
         }   
         else{
            callback(undefined,{
                timezone:body.timezone,
                main:body.current.weather[0].main
            }) 
     
         }
                                   
     })  
     
}

module.exports = {
    getWeather
}