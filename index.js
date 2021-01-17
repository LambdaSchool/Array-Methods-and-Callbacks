import { fifaData } from './fifa.js';

// ⚽️ M  V P ⚽️ //

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 1: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Practice accessing data by console.log-ing the following pieces of data note, you may want to filter the data first 😉*/

//(a) Home Team name for 2014 world cup final

function fht2014(obj){
    obj.forEach(item => {

        if(item.Year === 2014 && item.Stage === 'Final'){
            console.log(item['Home Team Name']);
            console.log(item);
        }
    });
}   
fht2014(fifaData);


//(b) Away Team name for 2014 world cup final

function fat2014(obj){
    obj.forEach(item => {

        if(item.Year === 2014 && item.Stage === 'Final'){
            console.log(item['Away Team Name']);
            
        }
    });
}   
fat2014(fifaData);


//(c) Home Team goals for 2014 world cup final

function fhtg2014(obj){
    obj.forEach(item => {

        if(item.Year === 2014 && item.Stage === 'Final'){
            console.log(item['Home Team Goals']);
            
        }
    });
}   
fhtg2014(fifaData);

//(d) Away Team goals for 2014 world cup final

function fatg2014(obj){
    obj.forEach(item => {

        if(item.Year === 2014 && item.Stage === 'Final'){
            console.log(item['Away Team Goals']);
            
        }
    });
}   
fatg2014(fifaData);

//(e) Winner of 2014 world cup final */

function win2014(obj){
    obj.forEach(item => {

        if(item.Year === 2014 && item.Stage === 'Final'){
            console.log(item['Win conditions']);
            
        }
    });
}   
win2014(fifaData);


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use getFinals to do the following:
1. Receive data as a parameter
2. Return an array of objects with the data of the teams that made it to the final stage

hint - you should be looking at the stage key inside of the objects
*/

function getFinals(data){
        const finalsTeams = data.filter((item) => item['Stage'] === 'Final')
        return finalsTeams // finalsTeams returns data of all team that made it to the finals- filters data by item  key Stage.
    }
    console.log(getFinals(fifaData));
    


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function called getYears to do the following: 
1. Receive an array
2. Receive a callback function getFinals from task 2 
3. Return an array called years containing all of the years in the getFinals data set*/

function getYears(data,everyYear){
    let finalYears = everyYear(data)
    let Years = finalYears.map(function(item){
        return item['Year']
    })
    return Years;  // returns array called Years listing all the years in getFinals data.
    }
    console.log(getYears(fifaData,getFinals));




/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function getWinners to do the following:  
1. Receives an array
2. Receives the callback function getFinals from task 2 
3. Determines the winner (home or away) of each `finals` game. 
4. Returns the names of all winning countries in an array called `winners` */ 

function getWinners(callback) {
    let winnersList = callback.map(function(item) {if(item["Home Team Goals"] > item["Away Team Goals"]){
        return item["Home Team Name"];
    }else if (item["Away Team Goals"] > item["Home Team Goals"]){
        return item["Away Team Name"]; // iterates to return the winners of each final game.
    }})
    return winnersList;
}
console.log(getWinners(getFinals(fifaData)));


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use the higher-order function getWinnersByYear to do the following:
1. Receive an array
2. Receive a callback function getYears from task 3
3. Receive a callback function getWinners from task 4
4. Return an array of strings that say "In {year}, {country} won the world cup!" 

hint: the strings returned need to exactly match the string in step 4.
 */
function getWinnersByYear(arr, getYears, getWinners) {
    let winners = getWinners(arr, getFinals);
    let years = getYears(arr, getFinals);
    return winners.map((country, index) => `In ${years[index]}, ${country} won the world cup!`);
}


console.log(getWinnersByYear(fifaData, getYears, getWinners));

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher order function getAverageGoals to do the following: 
 1. Receive the callback function getFinals from task 2 ensure you pass in the data as an argument
 2. Return the the average number of the total home team goals and away team goals scored per match and round to the second decimal place. 
 
 (Hint: use .reduce and do this in 2 steps) 
 
 Example of invocation: getAverageGoals(getFinals(fifaData));
*/

function teamGoals(data, team) {
    return data.map(obj => obj[`${team} Team Goals`]);
}

function twoDecimals(num) {
    return Math.round(num * 100) / 100;
}


function getAverageGoals(getFinals) {
    function allGoals(team) {
        return teamGoals(getFinals, `${team}`).reduce((total, num) => {
            return total + num;
        }, 0);
    }
    return twoDecimals((allGoals('Home') + allGoals('Away')) / getFinals.length).toString();
}
console.log(getAverageGoals(getFinals(fifaData)));





/// 🥅 STRETCH 🥅 ///

/* 💪💪💪💪💪 Stretch 1: 💪💪💪💪💪 
Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

}



/* 💪💪💪💪💪 Stretch 2: 💪💪💪💪💪 
Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

}


/* 💪💪💪💪💪 Stretch 3: 💪💪💪💪💪
Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

}


/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */


/* 🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑 */
function foo(){
    console.log('its working');
    return 'bar';
}
export default{
    foo,
    getFinals,
    getYears,
    getWinners,
    getWinnersByYear,
    getAverageGoals
}
