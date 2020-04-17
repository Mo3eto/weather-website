const request = require('request')
const gc = require('./geocode')
const fc = require('./forecast')
const rp = require('request-promise')

const adress = process.argv[2]

if(!adress)
{
    console.log(`Enter The Address `)
}
else {
    gc.geoCode(adress,(err,weatherData)=> {
        if(err)
        { 
               return console.log('Error: ',err)
         }
         const {latitude,longitude,location} = weatherData //object destructuring
         fc.getWeather(latitude,longitude,(err,geoData)=> {
            if(err) 
            {
                return console.log('Error: ',err)
            }
            console.log('Latitude: ',latitude)   
            console.log('Longitude: ',longitude)    
            console.log('Location: ',location)   

            console.log('WeatherData: ',geoData)
     
         })
         
     })
     
}

//npm i -g heroku
//heroku -v
//heroku login
//git --version
//git init -> make .git folder 
//git status -> show the status of the project ' what is untracked, tracked, committed 






//const ur = 'https://jsonplaceholder.typicode.com/todos/1'
// rp('https://jsonplaceholder.typicode.com/todos/1')
//     .then( (response) => {
//         const parsed = JSON.parse(response)
//         console.log(parsed.title)
//         console.log(response.statusCode)
//     })
//     .catch(function (err) {
//         console.log(err)
//     });



//const add = (a, b, callback) => {
    //     const c = a + b
    //     setTimeout( () => {
    //        callback(c)
    //      }
    //      ,2000)    
    // }
    // add(2,3,(sum)=>{ console.log(sum) })
    

    // const name = "MO3"
    // const age = 21 
    // const user = {
    //     name,
    //     userAGe:age,
    //     faculty:'FCI',
    //     gpa:2.5
    // }
    // console.log(user)
    //  const {name:myName,userAGe,faculty,gpa=4} = user
    //  console.log(myName)
    //  console.log(userAGe)
    //  console.log(faculty)
    //  console.log(gpa)