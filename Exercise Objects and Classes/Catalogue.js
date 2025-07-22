function catalagoue(arr) {
    let books = [];

    for (let book of arr) {
        let [name, price] = book.split(' : ');
        //console.log(price);

        price = Number(price);
        books.push({ name, price });
    }

    books.sort((a, b) => a.name.localeCompare(b.name));
    let currentGroup = '';

    for (let product of books) {
        let firstLetter = product.name[0];

        if (firstLetter !== currentGroup) {
            currentGroup = firstLetter;
            console.log(currentGroup);
        }

        console.log(`  ${product.name}: ${product.price}`);

    }
}
catalagoue([

    'Appricot : 20.4',

    'Fridge : 1500',

    'TV : 1499',

    'Deodorant : 10',

    'Boiler : 300',

    'Apple : 1.25',

    'Anti-Bug Spray : 15',

    'T-Shirt : 10'

])