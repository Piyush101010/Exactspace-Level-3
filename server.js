

const express = require('express');
const bodyParser = require('body-parser');

const Port = 3000;

const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.post('/', (req, res) => {
  // Parse JSON 
  const jsonData = JSON.parse(req.body.json); 
  
  res.render('result', { data: jsonData });
});

app.get('/result', (req, res) => {
  res.render('result');
});

app.listen(Port, (err)=>{
    if(err){
        console.log('Error connecting to Port');
    }

    console.log(`Connected to Port ${Port} successfully`);
});

