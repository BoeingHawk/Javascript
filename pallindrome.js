function pallindrome(num) {

    let digit, result = 0, originalNumber = num;

    while (num > 0){
        digit = num % 10;
        result = ( result * 10 ) + digit;
        num = Math.floor(num/10);
    }
    console.log('reversed number: '+ result);
    
    if(result === originalNumber) {
        console.log('Number is Pallindrome');
    }
    
    else{
        console.log('Number is not Pallindrome');
    }
}
pallindrome(111);