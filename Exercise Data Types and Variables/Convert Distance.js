function convertDistance (meters) {
    let oneKilometer = 0.62137; //miles
    let oneKilometers = 1000; // meters

    let kilometers = meters / oneKilometers;
    let miles = kilometers * oneKilometer;

    console.log(`${meters} meters is equal to ${kilometers} kilometers.`);
    console.log(`${kilometers} kilometers is equal to ${miles.toFixed(2)} miles.`);
}
convertDistance(1852);