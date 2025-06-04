function printAndSum (start, end) {
    let sum = 0;
    let line = ''
    for (let i = start; i <= end; i++) {
        line += i + ' ';
        sum += i;
    }
    console.log(line.trim());
    console.log(`Sum: ${sum}`)
}
printAndSum(0, 26)