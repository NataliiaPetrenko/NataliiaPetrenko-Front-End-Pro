const EXCHANGE_RATE = 26;

for (let dollarAmount = 10; dollarAmount <= 100; dollarAmount += 10) {
    const uahAmount = dollarAmount * EXCHANGE_RATE;
    console.log(`${dollarAmount} is ${uahAmount} UAH.`);
}
