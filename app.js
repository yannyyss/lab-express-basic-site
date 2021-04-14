const express = require('express')
const app = express()

// Make everything  inside of public directory avaliable:
app.use(express.static(__dirname + '/public'))

//Routes:

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/views/about.html')
})

app.get('/photos', (req, res) => {
    res.sendFile(__dirname + '/views/fotos.html')
})

//Server started:
app.listen(3000,()=>{
    console.log('App listening on port 3000')
})