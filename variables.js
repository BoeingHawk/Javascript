/*
variables: Link: https://www.w3schools.com/js/js_const.asp

1) var (used till 2015 - for old browsers legacy keyword) 

*/


/*

2) const
Value must be assigned at the time of declaration (i.e. Hoisting is not allowed)

Variables defined with const cannot be Re-declared and Re-assigned

Variables defined with const have Block Scope

When to use: Always use const if the value should not be changed (Arrays, Objects, Function, RegExp)


*/
console.log('Const');
console.log(' ');

const PI = 3.14159265359;
console.log('value of PI: '+PI);



/*

3) let

Only use let if you can't use const

> Variables declared inside a { } block can be accessed from outside the block: (global scope)

Example: 
{
  let x = 2;
}

> Redeclaring is easy with using let

*/

console.log('let');
console.log(' ');


let x = 10;
console.log('value of x at initial declaration: '+x);

{
    let x = 20;
    console.log('value of x within the block when redeclared is: '+x);
    //here value of x will be 20, within this block
    }

console.log('value of x outside block: '+x);
//outside the block value of x will be 10



//We can re-assign a value using let but can't re-declare the variable

let carName = 'Maruti';
carName = 'Volvo'
console.log(carName);


/*
Hoisting:
Meaning: You can use the variable before it is declared:

hoisting is not possible with let keyword

name = 'Max'
let name = 'John';
console.log(name);

Output: ReferenceError: Cannot access 'name' before initialization
*/


