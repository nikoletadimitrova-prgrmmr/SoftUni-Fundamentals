function bombNumbers(sequence, specialNumber){
    let bomb = specialNumber[0];
    let power = specialNumber[1];

    while(sequence.includes(bomb)){
        let index = sequence.indexOf(bomb);
        let start = Math.max(0, index - power);
        let count = power * 2 + 1;

        sequence.splice(start, count);
    }

    let sum = sequence.reduce((acc, val) => acc + val, 0);
    console.log(sum);
}
bombNumbers([1, 2, 2, 4, 2, 2,

2, 9],

[4, 2])