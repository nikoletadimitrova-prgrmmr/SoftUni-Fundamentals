function factorialDivsion(num1, num2) {
    let factorialOfFirstNumber = 1;
    let factorialOfSecondNumber = 1;

    for (let i = 1; i <= num1; i++) {
        factorialOfFirstNumber *= i;
    }

    for (let j = 1; j <= num2; j++) {
        factorialOfSecondNumber *= j;
    }

    // console.log(factorialOfFirstNumber);
    // console.log(factorialOfSecondNumber);
    let result = factorialOfFirstNumber / factorialOfSecondNumber;
    console.log(result.toFixed(2));
}
factorialDivsion(5, 2)