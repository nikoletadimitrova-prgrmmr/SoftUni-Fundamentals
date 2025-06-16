function addAndSubstract(arr) {
    let sum = 0;
    let newArr = [];
    let sumOfOriginal = 0;
    let sumOfModify = 0;

    for (let i = 0; i < arr.length; i++) {

        if(arr[i] % 2 === 0) {
            sum = arr[i] + i;
        } else {
            sum = arr[i] - i;
        }

        newArr.push(sum);

        sumOfOriginal += arr[i];
        sumOfModify += newArr[i];
        
    }

    console.log(newArr);
    console.log(sumOfOriginal);
    console.log(sumOfModify);
}
addAndSubstract([5, 15, 23, 56, 35]);