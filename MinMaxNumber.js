// Find Min and Max number from an array in Javascript


//array should alaways be declared using const keyword (best practise)
const array = [1,2,3,4,5,6,-3,99];

let min = array[0];
let max = array[0];

for(let i = 0; i < array.length; i++){
    if(array[i] < min){ min = array[i]; }
    
    if(array[i] > max){ max = array[i]; }
}

console.log('min = '+min)
console.log('max = '+max)

// output: min = -3 max = 99
