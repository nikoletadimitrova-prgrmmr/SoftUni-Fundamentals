function pointsValidation(arr) {
    let cordSystemValue = [0, 0];

    let sum1 = 0;
    let sum2 = 0;
    let sum3 = 0;

    for (let i = 1; i < arr.length; i++) {
        sum3 = Math.sqrt(((arr[2] - arr[0]) ** 2) + ((arr[3] - arr[1]) ** 2));
            //console.log(sum3); 5

        sum2 = Math.sqrt(((arr[0] - cordSystemValue[0]) ** 2) + ((arr[1] - cordSystemValue[1]) ** 2));
        //console.log(sum2);

        sum1 = Math.sqrt(((arr[2] - cordSystemValue[0]) ** 2) + ((arr[3] - cordSystemValue[1]) ** 2));
        //console.log(sum1);

        
    }

    if (sum2 % 1 === 0) {
            console.log(`{${arr[0]}, ${arr[1]}} to {${cordSystemValue[0]}, ${cordSystemValue[1]}} is valid`);
        } else {
            console.log(`{${arr[0]}, ${arr[1]}} to {${cordSystemValue[0]}, ${cordSystemValue[1]}} is invalid`);
        }


        if (sum1 % 1 === 0) {
            console.log(`{${arr[2]}, ${arr[3]}} to {${cordSystemValue[0]}, ${cordSystemValue[1]}} is valid`);
        } else {
            console.log(`{${arr[2]}, ${arr[3]}} to {${cordSystemValue[0]}, ${cordSystemValue[1]}} is invalid`);

        }

        if (sum3 % 1 === 0) {
            console.log(`{${arr[0]}, ${arr[1]}} to {${arr[2]}, ${arr[3]}} is valid`);
        } else {
            console.log(`{${arr[0]}, ${arr[1]}} to {${arr[2]}, ${arr[3]}} is invalid`);
        }
}
pointsValidation([2, 1, 1, 1])