function mergeArrays(arr1, arr2) {
    let arr3 = [];
    let concatenate = '';
    let sum = 0;

    let firstArray = arr1.map(Number);
    let secondArray = arr2.map(Number);
    
    for (let i = 0; i < firstArray.length; i++) {
        if (i % 2 === 0) {
            sum = firstArray[i] + secondArray[i];
            arr3.push(sum);
        } else {
            concatenate = arr1[i] + arr2[i]
            arr3.push(concatenate);
        }
    }

    console.log(arr3.join(' - '));
}
mergeArrays(['5', '15', '23', '56', '35'],

    ['17', '22', '87', '36', '11'])