
var temperature = 69
var conditions = "mostly cloudy"
var sunriseTime = "7:35am"
var sunsetTime = "7:42pm"

console.log(temperature, conditions, sunriseTime, sunsetTime)

var weather = `It's currently ${temperature} and ${conditions}. The sun rose this morning at ${sunriseTime} and will set at ${sunsetTime}. `

console.log(weather)

// temperature should hold a number representing the current temperature in Fahrenheit
// conditions should hold a string about the current weather conditions (i.e. "cloudy", "sunny", etc).
// sunriseTime should hold a string representing what time the sun rose this morning
// sunsetTime should hold a string representing what time the sun will set this evening
// Log each variable to the console.
// Use string template literals to combine these variables into a sentence about the weather. (Example: "It's currently sunny and 55 degrees. The sun rose this morning at 7:34 AM and will set at 5:09 PM.")


var highTemperatures = [55, 57, 53, 47, 56, 50];
var lowTemperatures = [33, 30, 29, 35, 31, 32]; 

console.log(highTemperatures[0])
console.log(lowTemperatures[5])

var total = highTemperatures[0] + highTemperatures[1] + highTemperatures[2] + highTemperatures[3] + highTemperatures[4] + highTemperatures[5]

var avg = total / 6

console.log(total)

console.log(avg)

// 2. Weather Data
// In your JavaScript file, copy and paste the following array:

// Print the first high temperature to the console.
// Print the last low temperature to the console.
// What is the average high temperature from the data set?
// What is the average low temperature from the data set?

var weatherObject = {
    temperature: 69,
    conditions: "mostly cloudy",
}
console.log(weatherObject.temperature)

var weatherone = `It's ${weatherObject.temperature} and ${weatherObject.conditions}`

console.log(weatherone)
//     In your JavaScript file, create an object that represents the current weather. Your can reuse your data from the first exercise. Your object should have the following properties:

// temperature
// conditions
// Log the current temperature to the console.

// Use string template literals to log a sentence about the weather console. (Example: "It's 64 degrees F and sunny.")
