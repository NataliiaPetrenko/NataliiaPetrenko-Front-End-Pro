
let userNumber = (prompt("Kindly enter three-digits number: "));

let allUserDigitsSame = userNumber[0] === userNumber[1] && userNumber[1] === userNumber[2];
if (allUserDigitsSame) {
    console.log("All the digits are the same!");
} else {
    console.log("Not all of the digits are the same.");
}

let userNumberDuplicates = userNumber[0] === userNumber[1] || userNumber[1] === userNumber[2] || userNumber[0] === userNumber[2];
if (userNumberDuplicates) {
    console.log("We have some duplicated digits among this number");
} else {
    console.log("We don't have any duplicated digits among this number");
}