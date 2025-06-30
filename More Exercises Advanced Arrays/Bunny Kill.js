function bunnyKill(data) {
    let coordinates = data.pop().split(' ').map(el => el.split(',').map(Number));
    let matrix = data.map(row => row.split(' ').map(Number));

    let snowballDamage = 0;
    let bunniesKilled = 0;

    for (let [row, col] of coordinates) {
        let bombValue = matrix[row][col];

        if (bombValue <= 0) 
            continue; 

        snowballDamage += bombValue;
        bunniesKilled++;
        matrix[row][col] = 0;


        for (let r = row - 1; r <= row + 1; r++) {
            for (let c = col - 1; c <= col + 1; c++) {
                if (
                    r >= 0 && r < matrix.length &&
                    c >= 0 && c < matrix[0].length &&
                    matrix[r][c] > 0
                ) {
                    matrix[r][c] -= bombValue;
                    if (matrix[r][c] < 0) {
                        matrix[r][c] = 0;
                    }
                }
            }
        }
    }

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[0].length; col++) {
            if (matrix[row][col] > 0) {
                snowballDamage += matrix[row][col];
                bunniesKilled++;
            }
        }
    }

    console.log(snowballDamage);
    console.log(bunniesKilled);
}
bunnyKill(['5 10 15 20',

'10 10 10 10',

'10 15 10 10',

'10 10 10 10',

'2,2 0,1'])