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

const temp = [3,-2,-6-1, 'error', 9, 13, 17, 15, 14, 9, 5];


const calTemp = (temps) => {
    let x = temps[0]
    let n = temps[0]
    for(let i = 0; i < temps.length; i++){
        const curTemp = temps[i]

        if(curTemp > x) x = curTemp;
        if(curTemp < n) n = curTemp;
    } 
    console.log(x, n);   
}


calTemp([3, 7, 4, 1, 8])