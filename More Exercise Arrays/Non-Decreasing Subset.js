function nonDecreasingSubset(arr) {
    let result = [];
    let currentMax;

    arr.forEach((num, index) => {
        if (index === 0) {
            currentMax = num;
            result.push(num);
        } else if (num >= currentMax) {
            currentMax = num;
            result.push(num);
        }
    });

    console.log(result.join(' '));
    
}
nonDecreasingSubset([1, 3, 8, 4, 10, 12, 3, 2, 24])