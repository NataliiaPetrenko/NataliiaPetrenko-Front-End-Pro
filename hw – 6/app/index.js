let userBirthYear = prompt("Kindly specify your year of birth:", "1999");
let userCity;
let userFavouriteSport;
let age;
let userAge;

const CURRENT_YEAR = 2024;

if (userBirthYear === null) {
    alert("It's so sad that you didn't want to specify the year of your birth.");
} else {
    userCity = prompt("Kindly specify the city where you are living:", "Kyiv");
}

if (userCity === null) {
    alert("It's so sad that you didn't want to specify the city where you are living.");
} else {
    userFavouriteSport = prompt("Kindly specify the type of your favourite sport:", "Football");
}

if (userFavouriteSport === null) {
    alert("It's so sad that you didn't want to specify the favourite type of sport.");
} else {
    age = CURRENT_YEAR - userBirthYear
    userAge = `Your age is ${age}`;
}

let userCountry;

switch (userCity) {
    case "Kyiv":
        userCountry = "You're living in Ukraine";
        break;

    case "Washington":
        userCountry = "You're living in the United States";
        break;

    case "London":
        userCountry = "You're living in the United Kingdom";
        break;

    default:
        userCountry = `You're living in ${userCity}`;
}

let userFavouriteChampion;

switch (userFavouriteSport) {
    case "Football":
        userFavouriteChampion = "Cool! Do you want to be like David Backham?";
        break;

    case "Box":
        userFavouriteChampion = "Cool! Do you want to be like Volodymyr Klitchko?";
        break;

    case "Basketball":
        userFavouriteChampion = "Cool! Do you want to be like Michael Jordan?";
        break;

    default:
        userFavouriteChampion = `Cool! Your favourite type of sport is ${userFavouriteSport}`;
}

alert (`${userAge}
${userCountry}
${userFavouriteChampion}`);