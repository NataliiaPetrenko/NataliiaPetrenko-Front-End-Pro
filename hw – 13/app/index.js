function calculateAverageNumber(arr) {
    let sumNumber = 0;
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr [i] === 'number' && !isNaN(arr[i])) {
            sumNumber += arr[i];
            count++;
        }
    }

    if (count === 0) {
        console.log("This array doesn't include numeric elements");
    }

    return sumNumber/count;
}

let arr = [10, "40", 50, "abc", true, undefined, null, 555, 98, 69, false];
console.log("The average number of the numeric elements of an array: ",calculateAverageNumber(arr));