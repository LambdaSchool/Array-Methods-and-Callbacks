import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');










// -----------------------------------------------------------------------------------**TASK 1**



// Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

// (a) Home Team name for 2014 world cup final
// (b) Away Team name for 2014 world cup final
// (c) Home Team goals for 2014 world cup final
// (d) Away Team goals for 2014 world cup final
// (e) Winner of 2014 world cup final 


const array = fifaData.filter(function (item) {
    return item.Year === 2014 && item.Stage === 'Final';
});

console.log(array);
console.log(array[0]["Home Team Name"]);
console.log(array[0]["Away Team Name"]);
console.log(array[0]["Home Team Goals"]);
console.log(array[0]["Away Team Goals"]);
console.log(array[0]["Winner2014"]);









// -----------------------------------------------------------------------------------**TASK 2**



/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an teamName of objects 
with only finals data */


function getFinals(data) {

    const array = data.filter(function (item) {

        return item.Stage === "Final";
});

        return array;
}

console.log(getFinals(fifaData));













// -----------------------------------------------------------------------------------**TASK 3**


/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an teamName called `years` 
containing all of the years in the dataset */


function getYears(data, getFinals) {

    return getFinals(data).map(function (item) {

    return item.Years;

});

}

console.log(getYears(fifaData, getFinals));


// -----------------------------------------------------------------------------------**TASK 4**

/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` 
and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an 
teamName called `winners` */ 


function getWinners(data, getFinals) {

    let winners = getFinals(data).map(function (item) {
    
        if (item["Home Team Goals"] > item["Away Team Goals"]) {
            return item['Home Team Name'];
    
        } else if (item['Away Team Name'] > item["Home Team Goals"]) {
            return item['Away Team Name'];
    
        } else if (item['Home Team Goals'] === item['Away Team Goals']) {
            return item['Win condition'];
    
        }
    });
    
    return winners;
};

console.log(getWinners(fifaData, getFinals));






// -----------------------------------------------------------------------------------**TASK 5**


// Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings
// "In {year}, {country} won the world cup!" 

// Parameters: 
// callback function getWinners
// callback function getYears


function getWinnersByYear(getWinners, getYears) {

    let winners = getWinners(fifaData, getFinals);
    let years = getYears(fifaData, getFinals);
    let yearlyWinners = [];

    console.log(winners);
    console.log(years);  

    winners.forEach(function (item, index) {
                yearlyWinners.push(`in ${years[index]}, ${item} won the world cup`)
    });

    console.log(winners);
    return yearlyWinners;
};

console.log(getWinnersByYear(getWinners, getYears));








// -----------------------------------------------------------------------------------**TASK 6**

/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

// function getAverageGoals(data) {

// };

// console.log(getAverageGoals(fifaData));
















// -----------------------------------------------------------------------------------**STRETCH**



/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 
 
Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

// function getCountryWins(/* code here */) {

//     /* code here */

// };

// getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

// function getGoals(/* code here */) {

//     /* code here */

// };

// getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

// function badDefense(/* code here */) {

//     /* code here */

// };

// badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */