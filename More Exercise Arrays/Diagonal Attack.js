function diagonalAttack(arr) {
    let matrix = arr.map(row => row.split(' ').map(Number));
    let n = matrix.length;

    let sumFirst= 0;
    for (let i = 0; i < n; i++) {
        sumFirst += matrix[i][i];
    }

    let sumSecond = 0;
    for (let i = 0; i < n; i++) {
        sumSecond += matrix[i][n - 1 - i];
    }

    if (sumFirst === sumSecond) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (j !== i && j !== n - 1 - i) {
                    matrix[i][j] = sumFirst;
                }
            }
        }
    }

    // Отпечатваме матрицата
    for (let row of matrix) {
        console.log(row.join(' '));
    }

}
diagonalAttack(['5 3 12 3 1',

'11 4 23 2 5',

'101 12 3 21 10',

'1 4 5 2 2',

'5 22 33 11 1'])