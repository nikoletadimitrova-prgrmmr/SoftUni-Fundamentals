function printDNA(number) {
    let sequence = 'ATCGTTAGGG';
    let index = 0

    for (let i = 0; i < number; i++) {
        let char1 = sequence[index % sequence.length];
        let char2 = sequence[(index + 1) % sequence.length];
        let parten = i % 4;

        if (parten === 0) {
            console.log(`**${char1}${char2}**`);
        } else if (parten === 1 || parten === 3) {
            console.log(`*${char1}--${char2}*`);
        } else if (parten === 2) {
            console.log(`${char1}----${char2}`);
        }

        index += 2;
    }
}
printDNA(10)