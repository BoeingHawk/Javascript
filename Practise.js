// Sum of 2 num

// let x = 5;
// let y = 6;
// console.log('Result: '+x+y);

// Find Min number from an array/list

const array = [1,2,3,4,5,6,-3,99];

let min = array[0];
let max = array[0];

for(let i = 0; i < array.length; i++){
    if(array[i] < min){ min = array[i]; }
    
    if(array[i] > max){ max = array[i]; }
}

console.log('min = '+min)
console.log('max = '+max)