function reverseNumber(num){

let result = 0, digit;

    while (num > 0)
    {
    digit = num % 10;
    console.log('digit: '+digit);

    result = ( result * 10 ) + digit;
    console.log('result: '+result);
    

    num = Math.floor(num / 10);
    console.log('num: '+num);
    }
    console.log('Reversed Number: '+result);
    
}

reverseNumber();