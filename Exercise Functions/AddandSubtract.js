function addAndSubstract(num1, num2, num3) {
    let result = sum(num1, num2);
    let finalResult = subtract(result, num3);
    console.log(finalResult);

    function sum(num1, num2) {
        return num1 + num2;
    }

    function subtract(result, num3) {
        return result - num3;
    }
}

addAndSubstract(23, 6, 10);