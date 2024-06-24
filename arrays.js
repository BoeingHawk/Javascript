// arrays in js

// An array is a special variable, which can hold more than one value:


// declaration (use const keyword for best practise)
const cars = ['Volvo','Mercedes','BMW','Toyota','Nissan'];

/* can be declared in multi-line as well

const cars = [
    'Volvo',
    'Mercedes',
    'BMW' ];
    
*/
   
   // type of Array is Object
   let type = typeof cars;
   console.log(type);


// add array elements - By default adds a new element at the last of the array
cars.push('Ford')
console.log(cars);


//delete an array element - By default removes the last element
cars.pop();
console.log(cars);


// add an array element at a particular index in an already existing array
cars.splice(4,0,'Audi');
console.log(cars);


// delete an array element at a particular index in an already existing array
cars.splice(4,1);
console.log(cars);

//re-assign a value on an index
cars[2] = 'Ferrari';
console.log(cars);


