'use strict';


const navbar = document.querySelector('.burger');
const navbarItems = document.querySelector('.mobile');
const closeLinks = document.querySelectorAll('.mobile h2')


for(let i = 0; i < closeLinks.length; i++){
    closeLinks[i].addEventListener('click', function(){
        navbarItems.classList.toggle('navItem')
    })
}
navbar.addEventListener('click', function(){
   navbarItems.classList.toggle('navItem')
})


//calling function other function
// function multi(x){
// const multiply = x * 2
// return multiply;
// }

// function fruitProcessor(blue, red){
//     const blueProcess = multi(blue);
//     const redProcess = multi(red)
//     return `the apple is ${blueProcess} and oranges is ${redProcess}`
// }


// const output = fruitProcessor(22,10);
// console.log(output)


//array start point
// const friend = ['Bruce', 'Bea', 'Phil'];
// console.log(friend);
// console.log(friend[friend.length - 1])

// const years  = new Array(1990, 1991, 1989);
// console.log(years)
// const mike = ['bruce', 'andrada', 30]
// console.log(
//     mike
// );

// const ageCal = (x) => {
//     return 2023 - x;
// }

// const yearss = [1990, 1992, 2000];

// const answ1 =  ageCal(yearss[0])
// const answ2 =  ageCal(yearss[1])
// const answ3 =  ageCal(yearss[yearss.length - 1])
// const answer  = [answ1, answ2, answ3]
// console.log(answer);

// const person = {
//     fname:'Milo',
//     age:32,
//     hobbies:'Coding',
//     driving:false,
// }

// console.log(person);

// if(person.driving){
//     console.log('professional driver')
// }else{
//     console.log('not professional drive');
// }

// const types= ['bea andrada']
// const person = [
//     'bruce', 'web developer', 'coffee lover','banana', 22 ['Bea', 'Phil', 'Kath', 'Saki', 'Vits', 'Chy']
// ];
// console.log('-starting point');
// for(let i = 0; i < person.length; i++){
//     // types.push(person[i]);
//     if(typeof person[i] !== 'string') continue;
//     console.log(person[i], typeof person[i]);
// }
// console.log('-starting number');
// for(let i = 0; i < person.length; i++){
//     // types.push(person[i]);
//     if(typeof person[i] === 'number') break;
//     console.log(person[i], typeof person[i]);
// }





// const year = [1990,1991,2020];
// const newYear = [];

// for(let i = 0; i < year.length; i++){
//      newYear.push(2023 - year[i])
//     }

//     console.log(newYear);



//inverted loop
// const person = [
//     'bruce', 'web developer', 'coffee lover','banana', 22 ['Bea', 'Phil', 'Kath', 'Saki', 'Vits', 'Chy']
// ];
// for(let i = person.length - 1; i >= 0; i--){
//     console.log(i, person[i])
// }

// console.log('===============');

// const exercise = ['shoulder', 'bicep','tricep']
// const prog = ['2sets, reps 12', '3sets, reps 8','4sets, reps 6']

// for(let i = 0; i < exercise.length; i++){
//     console.log(i, exercise[i]);
//     for(let i = 0; i < prog.length; i++){
//         console.log(prog[i]);
//     }
// }

// let exercise = ['shoulder', 'bicep','tricep','back']
// while(exercise.length){
//     console.log(exercise); 
//     exercise++
// }

// let dice = Math.trunc(Math.random() * 6) + 1;
// while(dice !== 6){
//     console.log(`dice --> ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
//     if(dice === 6) console.log('end of loop');
// }


// const calcTip = (bills) => {
//     return bills >= 50 && bills <= 300 ? bills * 0.15 : bills * 0.2;
// }

// let bills = [22, 295, 176, 440, 37, 105, 10,1100,86,52]
// const tips = []
// let totals = []
// for(let i = 0; i < bills.length; i++){
//     const tip = calcTip(bills[i]);
//     tips.push(tip);
//     totals.push(tip + bills[i]);
// }

// console.log(tips, totals);
// const calcAverage = (arr) => {
//     let sum = 0;
//     for(let i = 0; i < arr.length; i++){
//         sum += arr[i]
//     }
//     console.log(sum);
// }

// calcAverage(totals);


// const bruceArray = ['Phil','Salvador',2023 - 1990,'Web Dev',['Saki','Phil', 'Chy', 'kath', 'bruce', true]];
// console.log(bruceArray);

// const bruceObject = {
//     firstName: 'Phil',
//     lname: 'Salvador',
//     age: 2023 - 1990,
//     work:'Web dev',
//     friends:['Saki','Phil', 'Chy', 'kath', 'bruce']}
// //adding object
// bruceObject['facebook'] = 'bamp@gmail.com';
// //itenary operator
// const {firstName,lname, age, work, friends } = bruceObject
// console.log(`${firstName} and has ${friends.length} and her bestfriend ${friends[friends.length -1]}
// with the gags ${friends} and work as ${work} now he is ${age} years old`);
// const names = prompt()
// bruceObject[names] ? console.log(bruceObject[names]) : console.log('notexist');


//start
// const bruceObject = {
//     firstName: 'Phil',
//     lname: 'Salvador',
//     age: 1990,
//     work:'Web dev',
//     friends:['Saki','Phil', 'Chy', 'kath', 'bruce'],
//     hasDriverLicense : true,
//     calAge:function(){
//        this.bday = 2023 - this.age //'this' use inside only of object
//         return this.bday; 
//     }
// }

// bruceObject.friends.push('vits')
// bruceObject.calAge();
// console.log(bruceObject.bday);

// function summary(x){
//     const {firstName,lname, age, hasDriverLicense, friends} = x;
//     return `${firstName} ${lname} is ${x.calAge(age)} years old and her ${friends}
//      ${!hasDriverLicense ? 'professional' : 'not a professional driver'}`;
// }

//  const files = summary(bruceObject);
// console.log(files);

// const textElement = document.querySelector('.text');
// textElement.innerHTML = files;
//end


//start of object
// const mark = {
//     fullName : 'Mark Miller',
//     mass:78,
//     height:1.69,
//     calcBMI: function(){
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi
//     }
// };


// const john = {
//     fullName : 'John Smith',
//     mass:92,
//     height:1.95,
//     calcBMI: function(){
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi
//     }
// }

// mark.calcBMI();
// john.calcBMI();
// console.log(Math.floor(mark.bmi));
// console.log(Math.floor(john.bmi));

// if(mark.bmi > john.bmi){
// console.log(`${mark.fullName}'s BMI (${mark.bmi})
// is higher than ${john.fullName}'s BMI (${john.bmi})`);
// }else{
//     console.log('this is else')
// }
//end


//array start
// const sample = 'step'
// const type = [];

// for(let i = 0; i <= bruceArray.length; i++){
//     console.log(bruceArray[i], typeof bruceArray[i]);
//     // console.log(`${sample} ${i}`);
//     type[i] = typeof bruceArray[i]
// }
// console.log(type);

// const temp = [3,-2,-6-1, 'error', 9, 13, 17, 15, 14, 9, 5];


// const calTemp = (temps) => {
//     let x = temps[0]
//     let n = temps[0]
//     for(let i = 0; i < temps.length; i++){
//         const curTemp = temps[i]
//         if(curTemp > x) x = curTemp;
//         if(curTemp < n) n = curTemp;
//     } 
//     console.log(x, n);   
// }


// calTemp(temp)


const number = document.getElementById('num');
const btn = document.querySelector('.btn');
const background = document.getElementById('container-dom')


btn.addEventListener('click',function(){
    let random = Math.trunc(Math.random()*6)+1;
    number.innerHTML=random
    if(random === 5){
       number.innerHTML='win'
       background.style.background='darkorange'
       number.style.fontSize='4.5rem'
    }else{
        background.style.background=''
        number.style.fontSize=''
    }
    console.log(random);
})


// const myName = 'bruce';

// function first(){
//     const age = 30;

//     if(age >= 30){
//         const decade = 3;
//         var millenial = true;
//     }
//     function second(){
//         const job = 'teacher';
//         console.log(`${myName} is a ${age} years old ${job}`);
//     }
//     second();
// }

// first();


//hoisting
// console.log(addDecl(2,3));
// console.log(addExpr(2,3));
// console.log(addArrow(2,3));

// function  addDecl(a,b){
// return a+b
// }
// const addExpr = function(a, b){
//     return a + b;
// }
// const addArrow = (a,b) => a + b

//this
// const bruce = {
//     name:'bruce',
//     year:1999,
//     calAge: function(){
//         return 2023 - this.year
//     }
   
// };

 
// console.log(bruce.calAge());

// console.log(this);
// const calAge = (bday) => {
//     console.log(2023 - bday);
//     console.log(this);
// }
// calAge(1990)

// const bruce ={
//     year:1998,
//     calAge : function(){
//         console.log(2023 - this.year);
//     }
// }

// bruce.calAge()
// const bea = {
//     year:2001,
// };

// bea.calAge = bruce.calAge;
// bea.calAge();

//function vs arrow

// const bruce ={
//     fname:'bruce',
//     year:1998,
//     calAge : function(){
//         console.log(2023 - this.year);
//     },
//     greet: () => console.log(`hey ${fname}`)
// }

// bruce.greet();


// const bruce ={
//     fname:'bruce',
//     year:1991,
//     calAge : function(){
//         console.log(2023 - this.year);

        // const self = this;
        // const isMillenial = function(){
        //     console.log(self)
        //     console.log(self.year >= 1981 && self.year <= 1996);
        // };
     
//         const isMillenial = () =>{
//             const year = bruce.year
//             console.log(bruce)
//             console.log(year >= 1981 && year <= 1996);
//         };
//         isMillenial();
//     },
//     greet: function() {console.log(`hey ${this.fname}`)},
// }

// bruce.greet();
// bruce.calAge();
//{

// const addExpr = function(a, b){
//     console.log(arguments);
//     return a + b 
//  };
 
//  addExpr(2,5);
//  addExpr(22,22)
//  const addArrow = (a, b) => {
  
//     return console.log(a+ b); 
// }
// addArrow(2,5)



'use strict';

// // Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
//   // order: function(mainA, mainB){
//   //   return [this.starterMenu[mainA], this.mainMenu[mainB]]
//   // },
//   order: (ing1, ing2, ing3) =>{
//     return console.log(`${restaurant.starterMenu[ing1]} nice ${ing2} nice nice ${ing3}`);
//   }
  
// };

// console.log(restaurant.openingHours);

// const {name:restaurantName, 
//   openingHours: schedule = {thu, fri, sat},  
//   categories:tags,} = restaurant
// console.log(`Company Name: ${restaurantName}  menus: '${tags}' and schedule`,  schedule );


// const {menu =[], starterMenu: first=[]} = restaurant;
// console.log(menu, first);

// const arr = [2,3,4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x,y,z]= arr;
// console.log(x,y,z);

// let [main, ,secondary,] = restaurant.categories;

// console.log(main, secondary);

// const temporary = main;
// main = secondary;
// secondary = temporary;

// console.log(main, secondary);

// [main, secondary] = [secondary, main]
// console.log(main, secondary);
// console.log(nested);

// const nested = [2,4, [5,6]]


// const [i, , [j, k]] = nested;
// console.log(i, j, k); 

// const arr = [7,8,9];
// const setArr = [1,2,3, ...arr]
// console.log(setArr);


// const newFoods = [...restaurant.categories, 'Fish Tuna'];
// console.log(newFoods);

// const statePerson = {
//   name:'bruce'
// };

// const setPerson = {...statePerson, hobbies:'basket ball'};
// console.log(setPerson);




// const menuFirst = restaurant.starterMenu;
// const menuLast = restaurant.mainMenu;


// const stateMenu = [...menuFirst, ...menuLast]
// console.log(stateMenu);

// const ingredients = [prompt('let\'s order ingredients 1'), prompt('let\'s order ingredients 2'),
// prompt('let\'s order ingredients 3')]

// restaurant.order(...ingredients)


// const newRestaurant = {...restaurant, founder:'bruce'}
// console.log(newRestaurant);

// const newRestaurant1 = {...restaurant, founder:'bea'}
// console.log(newRestaurant1);


// console.log('bc' && 'bz');

// console.log(3 || 'bruce');

// console.log('bruce' && 'try')

// const rest1 = {
//   name:'phil',
//   numGuest:20,
// }
// const rest2 = {
//   name:'natoy',
//   owner:'bruce'
// }
// console.log(rest2.numGuest ??= 10);
// console.log(rest2);
// rest2.numGuest = rest1.numGuest;

// console.log(rest2);


// We're building a football betting app (soccer for my American friends 😅)!

// Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

// 1. Create one player array for each team (variables 'players1' and 'players2')
// 2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
// 3. Create an array 'allPlayers' containing all players of both teams (22 players)
// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
// 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
// 6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
// 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

// TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

// GOOD LUCK 😀

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };


// const player1 = game.players[0];
// const player2 = game.players[1];

// const allPlayers = [...player1, ...player2];
// console.log(allPlayers);




// const gk1 = [player1[0]]
// const teamName1 = [game.teamOne, ...gk1]
// let fieldteams1 = [];
// for(let i = 1; i < player1.length; i++){
//   const field = player1[i];
//   fieldteams1.push(field)
// };

// const teamOne = `Team 1 Name: ${teamName1[0]} GoalKeeper: ${teamName1[1]} fieldteams:${fieldteams1}`;                                                                                                              
// console.log(teamOne);

// const gk2 = [player2[0]]
// const teamName2 = [game.teamTwo, ...gk2]
// let fieldteams2 = [];
// for(let i = 1; i < player2.length; i++){
//   const field = player2[i];
//   fieldteams2.push(field)
  
// };

// const teamTwo = `Team 2 Name: ${teamName2[0]} GoalKeeper: ${teamName2[1]} fieldteams:${fieldteams2}`;                                                                                                              
// console.log(teamTwo);

// const playerFinal = [...player1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(playerFinal);


// const {odds:{team1, x:draw, team2}} = game;
// console.log(team1, draw, team2);

// const printGoals = function(...manlalaro){
// console.log(`${manlalaro.length} goals were scored`);
// }

// // printGoals('Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels');
// // printGoals('Lewandowski', 'Gnarby');
// printGoals(...game.scored)

// const winner = team1 > team2 ? 'team one win' : 'team two win';
// console.log(winner);


//loop array

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];


// for(const item of menu) 
// console.log(item);

// for(const [item, product] of menu.entries()){
//   console.log(`${item + 1}: ${product}`);
// }
//Enhanced object literals


// Data needed for a later exercise


const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[0]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5] +'-'+ weekdays[6] ]:{
    open: 0,
    close: 24,
  },
};


const restaurant = {
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  openingHours,
  order: (ing1, ing2, ing3) =>{
    return console.log(`${restaurant.starterMenu[ing1]} nice ${restaurant.starterMenu[ing2]} nice nice ${restaurant.starterMenu[ing3]}`);
  }
};
for(const day of weekdays){
  const open = restaurant.openingHours[day]?.open;
  console.log(` on ${day}, we open at ${open ?? 'not available'}`);
}


// console.log(restaurant.openingHours.mon?.less || restaurant.openingHours.mon);
// const detail =[];
// for(const [i, j] of weekdays.entries()){
//   detail.push(i + 1, j)

// }
// console.log(detail);

// console.log(restaurant);
// restaurant.order(1,2,3);

// const url = 'https://icanhazdadjoke.com/slack';
// const fetchApi = async () => {
//   try {
//     const resp = await fetch(url,{
//       headers:{
//         Accept: 'application/json'
//       }
//     });
//     const data = await resp.json();
//     const joke = data.attachments[0].text;
//     console.log(joke);
//   } catch (error) {
//     console.log(error);
//   }
// }
// fetchApi()


