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
const friend = ['Bruce', 'Bea', 'Phil'];
console.log(friend);
console.log(friend[friend.length - 1])

const years  = new Array(1990, 1991, 1989);
console.log(years)
const mike = ['bruce', 'andrada', 30]
console.log(
    mike
);

const ageCal = (x) => {
    return 2023 - x;
}

const yearss = [1990, 1992, 2000];

const answ1 =  ageCal(yearss[0])
const answ2 =  ageCal(yearss[1])
const answ3 =  ageCal(yearss[yearss.length - 1])
const answer  = [answ1, answ2, answ3]
console.log(answer);