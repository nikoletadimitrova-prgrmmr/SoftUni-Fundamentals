function carWash(arr) {
    let firstProduct = arr[0];
    let value = 0;
    let total = 0; 

    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === 'soap') {
            value += 10
        } 

        if (arr[i] === 'water') {
            value *= 1.20;
        }

        if (arr[i] === 'vacuum cleaner') {
            value *= 1.25
        }

        if (arr[i] === 'mud') {
            value *= 0.90;
        }

        total += value;
    }

    console.log(`The car is ${value.toFixed(2)}% clean.`);
    
}
carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap',

    'water'])