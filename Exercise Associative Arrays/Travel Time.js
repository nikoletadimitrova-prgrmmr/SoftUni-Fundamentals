function travelTime(arr) {
    let countries = new Map();

    for (let line of arr) {
        let [country, town, price] = line.split(' > ');
        price = Number(price);

        if (!countries.has(country)) {
            countries.set(country, new Map());
        }

        let towns = countries.get(country);

        if (!towns.has(town) || towns.get(town) > price) {
            towns.set(town, price);
        }
    }


    let sortedCountries = [...countries.entries()]
        .sort((a, b) => a[0].localeCompare(b[0]));

    for (let [country, towns] of sortedCountries) {

        let sortedTowns = [...towns.entries()]
            .sort((a, b) => a[1] - b[1])
            .map(([town, price]) => `${town} -> ${price}`)
            .join(' ');

        console.log(`${country} -> ${sortedTowns}`);
    }
}
travelTime([

"Bulgaria > Sofia > 500",

"Bulgaria > Sopot > 800",

"France > Paris > 2000",

"Albania > Tirana > 1000",

"Bulgaria > Sofia > 200"])