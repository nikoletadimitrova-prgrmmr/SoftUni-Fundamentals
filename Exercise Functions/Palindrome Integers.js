function palindromeIntegers(arr) {
    for (let i = 0; i < arr.length; i++) {
        let original = arr[i];
        let reversed = Number(original.toString().split('').reverse().join(''));

        if (original === reversed) {
            console.log('true');
        } else {
            console.log('false');
        }
    }
}
palindromeIntegers([123, 323, 421, 121])