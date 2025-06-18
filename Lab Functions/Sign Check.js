function singCheck(num1, num2, num3) {
    // let result = '';

    // if (num1 < 0) {
    //     return result = 'Negative'
    // }

    // if (num2 < 0) {
    //     return result = 'Negative'
    // }

    // if (num3 < 0) {
    //     return result = 'Negative'
    // }

    // console.log('Positive');

    let totalNegativeNums  = 0;

    if (num1 < 0) {
        totalNegativeNums++;
    }

    if (num2 < 0) {
        totalNegativeNums++
    }

    if (num3 < 0) {
        totalNegativeNums++
    }

    if (totalNegativeNums === 1 || totalNegativeNums === 3) {
        return 'Negative';
    } else {
        return 'Positive';
    }

}
let result = singCheck(5, 12, -15);
console.log(result);

