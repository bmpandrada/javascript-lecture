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
const person = [
    'bruce', 'web developer', 'coffee lover','banana', 22 ['Bea', 'Phil', 'Kath', 'Saki', 'Vits', 'Chy']
];
for(let i = person.length - 1; i >= 0; i--){
    console.log(i, person[i])
}