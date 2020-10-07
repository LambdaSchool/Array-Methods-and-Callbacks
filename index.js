import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');

console.log()
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

const worldCupFinals = fifaData.filter(function(item){
    if (item[`Year`] === 2014 && item[`Stage`] === `Final`)
   return(item)
 });
 
 console.log(worldCupFinals[0][`Home Team Name`]);
 console.log(worldCupFinals[0][`Away Team Name`]);
 
 console.log(worldCupFinals[0][`Home Team Goals`]);
 console.log(worldCupFinals[0][`Away Team Goals`]);
 
 if(worldCupFinals[0]["Home Team Goals"] > worldCupFinals[0]["Away Team Goals"]) {
   console.log(worldCupFinals[0][`Home Team Name`]);
 }
 else (console.log(worldCupFinals[0][`Away Team Name`]));

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {
    return data.Stage == "Final";
 };
 function filter() {
   return fifaData.filter(getFinals);
 }
 
 console.log(filter(getFinals(fifaData)));

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(callback, data) {
    let years = [];
    callback(data).map(game => {
      years.push(gam.Year);
    });
    return years;
  };
  console.log(getYears(getFinals, fifaData));
  
  

/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinnersByYear(callback, data) {
    let gane = callback(data);
    let winners = [];
    game.map(game => {
      if (game[`Home Team Goals`] === game[`Away Team Goals`]) {
        let winner = game[`Win conditions`].substr(0, game[`Win conditions`].indexOf(`W`));
        winners.push(winner);
      } else if (game[`Home Team Goals`] > game[`Away Team Goals`]) {
        winners.push(game[`Home Team Name`]);
      } else {
        winners.push(game[`Away Team Name`]);
      }
    });
    return winners;
  };
  
  getWinnersByYear(getWinners(getFinals, fifaData));

/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(callback1, callback2) {
    let winner = callback1(getFinals, fifaData);
    let years = callback2(getFinals, fifaData);
    let winnersOnly = [];
    for(let i = 0; i < winners.length; i++){
        winnersOnly.push(`In ${years[i]}, ${winners[i]} won the world cup!`);
    }
    
    return winnersOnly;
};

  console.log(getWinnersByYear(getWinners, getYears));

/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(/* code here */) {
    let aHomeTeamGoals = data.reduce((goals, game, index) => {
        return goals + game[`Home Team Goals`];
    },0);
    aHomeTeamGoals /= data.length;

    let aAwayTeamGoals = data.reduce((goals, game, index) => {
        return goals + game[`Away Team Goals`];
    },0);
    aAwayTeamGoals /= data.length;

    return {
        aHomeTeamGoals,
        aAwayTeamGoals
    }
};

console.log(getAverageGoals(fifaData));

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
