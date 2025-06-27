function negativeOrPositiveNumbers(arr){
    let result = []; 

    let numbers = arr.map(Number);


    for(let i = 0; i < numbers.length; i++) {
        if(numbers[i] < 0) {
            result.unshift(numbers[i])
        } else {
            result.push(numbers[i])
        }
    }

    console.log(result.join('\n'));
    
}
negativeOrPositiveNumbers(['3', '-2', '0', '-1'])