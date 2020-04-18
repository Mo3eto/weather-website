const request = require('request')


const getCorona = (country, callback) => {
    const url = 'https://pomber.github.io/covid19/timeseries.json'
    request( {url:url,json:true}, (error, response, body) => {

        if(error) 
        { callback('Unable To Connect Network Services',undefined,undefined)  }
        // else if (body[country].length === 0)
        // { callback('Perhaps Wrong Country Name',undefined,undefined)  }
        else {
            const len = body[country].length
            callback(undefined,body[country],len)
        }

    } )

}


module.exports = {
    getCorona
}