function evenAndOddSubtraction(arr) {
    let sumOfEven = 0;
    let sumOfOdd = 0;
    for (let i = 0; i < arr.length; i++) {

        if (arr[i] % 2 === 0) {
            sumOfEven += arr[i];
            //console.log(sumOfEven);
        } else {
           sumOfOdd += arr[i]; 
        }

        
    }

    console.log(sumOfEven - sumOfOdd);
}
evenAndOddSubtraction([1, 2, 3, 4, 5, 6])