function multiplyNumbers(a) {
    return function(b) {
        return a*b;
    }
}

let result = multiplyNumbers(5)(2);
console.log(result);