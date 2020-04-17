const express = require('express')
const app = express()
const path = require('path')
const hbs = require('hbs')
const request = require('request')
const gc = require('./utils/geocode')
const fc = require('./utils/forecast')

const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))


app.get('/weather', (req, res) => {
    if(!req.query.address)
    {
         return res.send(
            {
                Error: "Address Is Required"
            }
        )
    }
    gc.geoCode(req.query.address, (error,{latitude,longitude,location} = {}) => {
 
        if(error)
        {
             return res.send( { error })
        }
      //  const {latitude,longitude,location} = {} = weatherData // this is better than pass in fun. and set default value
        fc.getWeather(latitude, longitude, (error, geoData) => { 
            if(error)
            {
               return res.send( {error })
            }
 
            res.send({
                latitude,
                longitude,
                location,
                geoDataaa:geoData
            })

        })

    })
    
})






app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'MO3TASEM'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'MO3TASEM'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'This is some helpful text.',
        title: 'Help',
        name: 'MO3TASEM'
    })
})
app.listen(3000)