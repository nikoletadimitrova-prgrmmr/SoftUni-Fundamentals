function sumOfOddNumbers (n) {
    let sum  = 0;
    let count = 0;

    for (let i = 1; i <= 100; i++) {
        if (i % 2 === 1) {
            console.log(i);
            count ++;
            sum += i;
        }

        if (count === n) {
            console.log(`Sum: ${sum}`);
            break;
        }
    }
}
sumOfOddNumbers(3)