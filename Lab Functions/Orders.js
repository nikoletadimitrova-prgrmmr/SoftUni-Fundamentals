function orders(product, quantity) {
    let sum = 0;

    if (product === 'coffee') {
        sum = (1.50 * quantity);
    } else if (product === 'water') {
        sum = (1.00 * quantity);
    } else if (product === 'coke') {
        sum = (1.40 * quantity);
    } else {
        sum = (2.00 * quantity);
    }

    console.log(sum.toFixed(2));

}
orders('water', 5);