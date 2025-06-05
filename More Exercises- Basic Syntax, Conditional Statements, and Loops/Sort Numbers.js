function sortNumbers (num1, num2, num3) {
    let newArr = [num1, num2, num3];

    newArr.sort().reverse();

    console.log(newArr.join('\r\n'));
}

sortNumbers(2, 1, 3)