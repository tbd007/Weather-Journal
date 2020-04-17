// Setup empty JS object to act as endpoint for all routes
const projectData = {};
// Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();
/* Dependencies */
/* Middleware*/
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));
// Spin up the server
const port = 3000;
const server = app.listen(port,()=>{
    console.log('server running');
    console.log(`running on localhost:${port}`)
});

app.get('/api/projectData', (req,res)=>{
    res.send(projectData);
});

// Callback function to complete GET '/all'
app.get('/', function (req, res) {
  res.send(data);
})

// Post Route
app.post('/api/projectData', (req,res)=>{
    const{date,temp,content} = req.body;
    projectData[date] = {
        temp, 
        content,
        }
        res.status(201).send()
});
