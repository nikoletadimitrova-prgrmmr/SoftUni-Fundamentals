function oddAndEven(number) {
    let string = number + '';
    //console.log(string);
    let sumOfOdd = 0;
    let sumOfEven = 0;

    for (let i = 0; i < string.length; i++) {
        //console.log(string[i]);

        if (string[i] % 2 === 0) {
            sumOfOdd += Number(string[i]);
        }

        if (string[i] % 2 === 1) {
            sumOfEven += Number(string[i]);
        }
    }

    console.log(`Odd sum = ${sumOfEven}, Even sum = ${sumOfOdd}`);
}
oddAndEven(1000435)