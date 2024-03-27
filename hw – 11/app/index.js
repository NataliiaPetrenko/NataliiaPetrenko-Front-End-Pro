let userNumber = parseInt(prompt("Kindly enter the integer: "));
let isPrimeNumber = true;

if (userNumber <= 1) {
    isPrimeNumber = false;
} else {
    for (let i = 2; i < userNumber; i++) {
        if (userNumber % i === 0) {
            isPrimeNumber = false;
            break;
        }
    }
}

if (isPrimeNumber) {
    console.log(`${userNumber} is a prime number.`);
} else {
    console.log(`${userNumber} isn't a prime number.`);
}


