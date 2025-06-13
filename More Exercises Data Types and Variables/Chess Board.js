function chessBoard (number) {
    let result = '<div class="chessboard">\n';

    for (let row = 0; row < number; row++) {
        result += '  <div>\n';

        for (let col = 0; col < number; col++) {
            let color = (row + col) % 2 === 0 ? 'black' : 'white';
            result += `    <span class="${color}"></span>\n`;
        }

        result += '  </div>\n';
    }

    result += '</div>';
    return result;
}
chessBoard(3);