let integerN = parseInt(prompt("Enter the integer N: "));

for (let i = 1; i <= 100; i++) {
    if (i * i <= integerN) {
        console.log(i);
    } else {
        break;
    }
}