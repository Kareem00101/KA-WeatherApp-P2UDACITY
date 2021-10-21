// Setup empty JS object to act as endpoint for all routes
projectData = {};

/* 
*
* All Requires
*/
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { response } = require('express');

// Start up an instance of app
const app = express.app();

/* 
*
* Middleware
*/
// Here we are configuring express to use body-parser as middle-ware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
/*  I suggest using express, instead of body-parser since this package is deprecated
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json()); */

// Cors for cross origin allowance
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port = 3000;
const server = app.listen(port, () => {
    console.log(`The server is running on port: ${port}`);
});

// Setting up routes
// Get routes
app.get('/', (req,res) => {
    // Redirecting from home router to live-weather
    res.redirect('/live-weather');
});
app.get('/live-weather', (req,res) =>{
    // Send the weather-data to the user
    res.send(projectData);
});
// post routes
app.post('/add/weather-data', (req, res) =>{
    // We need to check if the body exists
   if(req.body){
        // We don't need all the request body, so we can just pick the variables we want
        projectData.temperature = req.body.temperature;
        projectData.date = req.body.date;
        projectData.userResponse = req.body.user-response;
        res.end();
        // For testing purposes
        console.log("The request body: ", req.body);
        console.log("The project data: ", projectData);
   } else console.log("Error req.body is empty!");

});
