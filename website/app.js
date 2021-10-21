/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

// API credentials and url 
const baseURL = 'api.openweathermap.org/data/2.5/weather?zip=';
const apiKey = '&appid=8d143f4de42234bc4eb01542de2d28ad';