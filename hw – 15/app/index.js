function summarizeFunction() {
    let sumNumbers = 0;

    return function (value) {
        sumNumbers += value;
        return sumNumbers;
    }
}

let sum = summarizeFunction();

console.log(sum(4));
console.log(sum(6));
console.log(sum(10));
console.log(sum(7));