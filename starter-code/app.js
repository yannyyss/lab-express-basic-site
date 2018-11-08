const express = require('express');
const app = express();

// Make everything  inside of public directory avaliable:
app.use(express.static(__dirname + '/public'));

//Routes:

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/public/about.html');
});

app.get('/fotos', (req, res) => {
    res.sendFile(__dirname + '/public/fotos.html');
});

//Server started:
app.listen(3000,()=>{
    console.log('app escuchando 3000');
});