function storeProvision(firstArr, secondArr) {
    let result = {};

    for (let i = 0; i < firstArr.length; i+=2) {

        let product = firstArr[i];
        let price = Number(firstArr[i + 1]);

        if (!result.hasOwnProperty(product)) {
            result[product] = 0;
        }

        result[product] += price;
    }

    for (let i = 0; i < secondArr.length; i+=2) {

        let product = secondArr[i];
        let price = Number(secondArr[i + 1]);

        if (!result.hasOwnProperty(product)) {
            result[product] = 0;
        }

        result[product] += price;
    }

    for(let [product, price] of Object.entries(result)) {
        console.log(`${product} -> ${price}`);
        
    }
}
storeProvision([

    'Chips', '5', 'CocaCola', '9', 'Bananas',

    '14', 'Pasta', '4', 'Beer', '2'

],

    [

        'Flour', '44', 'Oil', '12', 'Pasta', '7',

        'Tomatoes', '70', 'Bananas', '30'

    ])