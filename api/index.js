const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const heroes = {
    'spider man': {
        'govName': 'Peter Parker',
        'power': 'webs'
    },
    'hulk':{
        'govName': 'Bruce Banner',
        'power': 'super strength'
    },
    'iron man':{
        'govName': 'Tony Stark',
        'power': 'suit'
    },
    'unknown':{
        'power': 'unknown',
        'govName': 'unknown',
    }
}
app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})
app.get('/main.js', (request, response)=>{
    response.sendFile(__dirname + '/main.js')
})

app.get('/api/:name',(request,response)=>{
    const heroName = request.params.name.toLowerCase()

    if( heroes[heroName] ){
        response.json(heroes[heroName])
    }else{
        response.json(heroes['unknown'])
    }
    
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is now running on port ${PORT}! Betta Go Catch It!`)
})

