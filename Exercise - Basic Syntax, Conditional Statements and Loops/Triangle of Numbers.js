function triangleOfNumers(n) {
    for (let i = 1; i <= n; i++) {
        let line = '';

        for (let j = 1; j <= i; j++) {
            line += j + ' '
        }
        console.log(line);
    }
}
triangleOfNumers(3)