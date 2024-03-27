const EXCHANGE_RATE = 26;

for (let dollarAmount = 10; dollarAmount <= 100; dollarAmount += 10) {
    const uahAmount = dollarAmount * exchangeRate;
    console.log(`${dollarAmount} is ${uahAmount} UAH.`);
}
