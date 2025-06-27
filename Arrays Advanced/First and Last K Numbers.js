function firstAndLastKNumbers(arr) {
    let k = arr.shift();
    //console.log(k);

    let firtsRotation = arr.slice(0, k)
    //console.log(firtsRotation);
    let secondRotation = arr.slice(-k);


    console.log(firtsRotation.join(' '));
    console.log(secondRotation.join(' '));
}
firstAndLastKNumbers([2, 7, 8, 9])