function maxumber(arr, sum) {
    let rightSum = 0;
    let leftSum = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            rightSum = arr[i];
            leftSum = arr[j];
            let sumOfArr = rightSum + leftSum;
            if (sum === sumOfArr) {
                console.log(`${arr[i]} ${arr[j]}`);
            }
        }
    }
}
maxumber([1, 7, 6, 2, 19, 23],

    8);