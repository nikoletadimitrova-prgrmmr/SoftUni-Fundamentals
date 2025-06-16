function arrayRotation(arr, num) {
    let array = arr.length;
    num %= array;

    console.log(arr.slice(num).concat(arr.slice(0, num)).join(' '));
}
arrayRotation([51, 47, 32, 61, 21], 2)