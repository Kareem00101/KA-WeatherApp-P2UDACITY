/* Global Variables */

// API credentials and url 
const baseURL = 'api.openweathermap.org/data/2.5/weather?zip=';
const apiKey = '&appid=8d143f4de42234bc4eb01542de2d28ad';

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

// Add the event listener for the generate button
document.getElementById('generate').addEventListener('click', generateData);

// Helper function to get user input
function getUserInput(){
    return{
        userZIP: document.getElementById('zip').value,
        userFeelings: document.getElementById('feelings').value
    };
}

function validateZip(zip){
    // US zip code is 5 digits
    if(zip>=00000 && zip<=99999){
        return;
    }else console.log("Invalid zip code input!");
}
// Action performed on clicking generate
function generateData(e){
    // Prevent default, prevent any other action other than specified here
    e.preventDefault();
    // Perhaps if the user clicks the generate button, this means that he probably have entered the data so let's catch it
    const {userZIP, userFeelings} = getUserInput();
    // Validating user input
    var x = parseInt(userZip, 10);
    if(!Number.isNaN(x)){
        validateZip(x);
    }else{
        console.log("Invalid zip code input!");
    }
    // Now we need to pass this data to the API
    getWeatherData(userZIP).then(function(apiData){
        /* 
        * Now we should post data to the server and then Updated the user GUI
        */
        // Posting the data
        // Naming was done according to the project Rubric
        postData('/add/weather-data', {date: newDate, temp: apiData.main.temp, content: userFeelings});
    }).then(function(){
        //updateGUI();
    }).catch(function(err){
        console.log("Error has occurred during posting: ", err);
    })
};

// Calling the API and getting the weather data
const getWeatherData = async(zip) => {
    // Adjusting the API URL
    const response = await fetch(baseURL+zip+apiKey);
    // Always try and catch in Async functions
    try{
        // Always await the response
        const data = await response.json();
        return data;
    } catch(err){
        // In case of error, we print it so we can deal with it later
        console.log("Error getting weather data: ", err);
    }
};

// Posting the data to the server
const postData = async(url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            // Data received as JSON and will be stringified later
            'Content-Type': 'application/json',
        },
        // We need the data in a form of a string
        body: JSON.stringify(data),
    });
    try{
        // Always await the response
        const resData = await response.json();
        return resData;
    } catch(err){
        // In case of error, we print it so we can deal with it later
        console.log("Error getting weather data: ", err);
    }
};