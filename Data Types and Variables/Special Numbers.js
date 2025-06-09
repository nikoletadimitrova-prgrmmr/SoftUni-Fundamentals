function specialNumbers(num) {

    //let sum = 0;

    // for (let i = 1; i <= num; i ++) {


    //     let lastTwoDigits = i % 100;
    //     let lastDigits = lastTwoDigits % 10;
    //     let firsDigit = Math.floor(lastTwoDigits / 10);
    //     sum = lastDigits + firsDigit;


    //     if(sum === 5 || sum === 7 || sum === 11)  {
    //         console.log(`${parseFloat(i)} - yes`);

    //     } else {
    //         console.log(`${parseFloat(i)} - no`);

    //     }
    // }


    for (let i = 1; i <= num; i++) {
        let number = i;
        let sum = 0;

        while (number !== 0) {
            sum += number % 10;
            number = Math.floor(number / 10);
        }

        if (sum === 5 || sum === 7 || sum === 11) {
            console.log(`${i} -> True`);
        } else {
            console.log(`${i} -> False`);
        }
    }

 
    // let sum = 0;

    // for (let i = 1; i <= num; i++) {
    //     let numToString = i.toString();

    //     if (numToString.length >= 2) {
    //         let lastDigit = Number(numToString[numToString.length - 1]);
    //         let secondLastDigit = Number(numToString[numToString.length - 2]);
    //         sum = lastDigit + secondLastDigit;
    //     } else {
    //         sum = Number(numToString[0]);
    //     }

    //     if (sum === 5 || sum === 7 || sum === 11) {
    //         console.log(`${i} -> True`);
    //     } else {
    //         console.log(`${i} -> False`);
    //     }
    // }
}
specialNumbers(15)