function rotateArray(arr) {
    let rotation = Number(arr.pop()) % arr.length;
    for (let i = 0; i < rotation; i++) {
        arr.unshift(arr.pop());
    }
    console.log(arr.join(' '));
}
rotateArray([['1', '2', '3', '4', '2']])