const request = require('request')

const geoCode = (adress,callback) =>{
    const geoCodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(adress) +'.json?limit=2&access_token=pk.eyJ1IjoibXJtb2EiLCJhIjoiY2s4ejI2dDU5MGs2NTNuczJzYWlycjA4YyJ9.f2pWVCBLhBJ87WG2UcGPOg'
    request( {url:geoCodeURL,json:true}, (error,response,body) => {
        if(error) 
        {
            callback('Unable To Connect Location Services',undefined) 
        }
        else if(body.features.length === 0)
        {
            callback('Wrong Location',undefined) 
        }

        else{
            callback(undefined,{
                 longitude : body.features[0].center[0],
                 latitude : body.features[0].center[1]  ,  
                 location : body.features[0].place_name                  
            })
    
        }
    
    
    })

}

module.exports = {
    geoCode
}