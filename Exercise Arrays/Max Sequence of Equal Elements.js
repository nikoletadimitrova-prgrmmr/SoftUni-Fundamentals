function maxSequnceOfEqualElements(arr) {
    let count = 1;
    let maxCount = 1;
    let number = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i - 1]) {
            count++;
            if (count > maxCount) {
                maxCount = count;
                number = arr[i];
            }
        } else {
            count = 1;
        }
    }

    console.log(Array(maxCount).fill(number).join(' '));
}

maxSequnceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);