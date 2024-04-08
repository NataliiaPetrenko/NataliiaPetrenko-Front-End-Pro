function enterUserNumber () {
    let userNumber;
    let iteration = 0;

    while (iteration < 10) {
        userNumber = prompt("Kindly enter the number bigger than 100: ");

        if (userNumber === null) {
            console.log("The user has cancelled the input.");
            return;
        }

        const comparingNumber = parseFloat(userNumber);

        if (!isNaN(comparingNumber) && comparingNumber > 100) {
            console.log("You enter the number bigger than 100: ", + comparingNumber);
        } else {
            console.log("You entered the wrong number. Try again!");
        }

        iteration++;
    }
    
    console.log("The maximum number of iteration was achieved. The last entered number is " + userNumber);
}

enterUserNumber();