function sorting(arr){
    let sortinArr = arr.sort((a,b) => a - b );
    //console.log(sortinArr);

    let result = [];

    while (sortinArr.length > 0) {
        if (sortinArr.length > 0) {
            result.push(sortinArr.pop()); // най-голям
        }
        if (sortinArr.length > 0) {
            result.push(sortinArr.shift()); // най-малък
        }
    }

    console.log(result.join(' '));
    
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])