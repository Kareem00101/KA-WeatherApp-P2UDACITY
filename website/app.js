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
// Action performed on clicking generate
function generateData(e){
    // prevent default, prevent any other action other than specified here
    e.preventDefault();
    // perhaps if the user clicks the generate button, this means that he probably have entered the data so let's catch it
    const {userZIP, userFeelings} = getUserInput();
    // now we need to pass this data to the API
}