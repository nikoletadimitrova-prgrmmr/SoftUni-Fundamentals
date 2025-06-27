function processOddNumbers(arr) {
    let result = [];
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if(i % 2 === 1) {
            result.push(arr[i] * 2);
        }
    }

    console.log(result.slice().reverse().join(" "));
}
processOddNumbers([10, 15, 20, 25])