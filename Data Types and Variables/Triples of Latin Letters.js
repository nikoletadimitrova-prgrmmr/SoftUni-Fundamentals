function triplesOfLatinLetters(number) {

    for (let first = 0; first < number; first++) {
        for (let second = 0; second < number; second++) {
            for (let third = 0; third < number; third++) {

                let firstLetter = String.fromCharCode(97 + first);
                let secondLetter = String.fromCharCode(97 + second);
                let thirdLetter = String.fromCharCode(97 + third);

                console.log(firstLetter + secondLetter + thirdLetter);
            }
        }
    }
}
triplesOfLatinLetters(3)