function centuriesToMinutes (centurie) {
    let oneCenture = 1;
    let year = 100 * centurie;
    let days = Math.trunc(365.2422 * year);
    let hours = 24 * days;
    let minutes = 60 * hours;

    let ocenture = (`${centurie * oneCenture} centuries = ${year} years = ${days} days = ${hours} hours = ${minutes} minutes `);

    console.log(ocenture);
    
}
centuriesToMinutes(5)