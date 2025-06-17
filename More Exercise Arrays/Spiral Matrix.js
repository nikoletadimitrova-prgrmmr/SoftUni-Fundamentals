function spritalMatrix(rows, cols) {
    let matrix = [rows];

    let num = 1;
    let top = 0;
    let bottom = rows - 1;
    let left = 0;
    let right = cols - 1;

     for (let i = 0; i < rows; i++) {
        matrix[i] = [cols];
    }

    while (top <= bottom && left <= right) {
        for (let i = left; i <= right; i++) {
            matrix[top][i] = num;
            num++;
        }
        top++;
    

    for (let i = top; i <= bottom; i++) {
            matrix[i][right] = num;
            num++;
        }
        right--;

    if (top <= bottom) {
            for (let i = right; i >= left; i--) {
                matrix[bottom][i] = num;
                num++;
            }
            bottom--;
        }
    
    if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                matrix[i][left] = num;
                num++;
            }
            left++;
        }
    }
    
    for (let i = 0; i < rows; i++) {
        console.log(matrix[i].join(' '));
    }

}
spritalMatrix(5, 5);