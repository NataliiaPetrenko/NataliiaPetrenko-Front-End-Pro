function removeSymbols(line, symbolsToRemove) {
    let result = [];
    for (let i = 0; i < line.length; i++) {
        let symbol = line[i];
        if (symbolsToRemove.indexOf(symbol) === -1) {
            result.push(symbol);
        }
    }

    return result.join('');
}

let userLine = prompt("Kindly enter your line: ", "Hello, world!");
let userSymbolsToRemove = prompt("Kindly enter the symbols to remove with a comma: ", "l, d");

let symbolsToRemove = userSymbolsToRemove.split(",").map(function(line) {
    return line.trim();
});

let result = removeSymbols(userLine, userSymbolsToRemove);
console.log("The result is:", result);