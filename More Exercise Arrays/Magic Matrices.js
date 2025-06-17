function magicMatrices(arr) {
    let n = arr.length;
    let targetSum = arr[0].reduce((a, b) => a + b, 0);

    for (let i = 0; i < n; i++) {
        let rowSum = arr[i].reduce((a, b) => a + b, 0);
        let colSum = arr.reduce((sum, row) => sum + row[i], 0);

        if (rowSum !== targetSum || colSum !== targetSum) {
            return false;
        }
    }

    return true;

}
magicMatrices([[4, 5, 6],

[6, 5, 4],

[5, 5, 5]]);