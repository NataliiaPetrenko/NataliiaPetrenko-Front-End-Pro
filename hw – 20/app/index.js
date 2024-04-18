const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function filterEvenNumbers(array) {
    return array.filter(function(num) {
        return num % 2 === 0;
    });
}

const newArray = filterEvenNumbers(originalArray);
console.log(newArray);