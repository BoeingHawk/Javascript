// array sorting

const arr = [1,3,4,2,9];

//arr.sort();
//console.log('using .sort() method: '+arr);


/* 

the above is using the sort method, 
but
if we want to write a code without methods, then knowledge of sorting algorithms are essential

Do I need to Study DSA now ?

The Why ?: which algorithm to implement must be known 

*/


//  Bubble Sort (https://www.doabledanny.com/bubble-sort-in-javascript)



for( let i = arr.length - 1; i > 0; i--){
    for(let j = 0; j < i; j++)
        {
        if(arr[j] > arr[j+1])
        {
            [ arr[j], arr[j+1] ] = [arr[j+1], arr[j]];
        }
    }
}

console.log('Sorting array with a for loop: '+arr);


