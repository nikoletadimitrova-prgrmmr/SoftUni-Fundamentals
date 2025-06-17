function printNthElements (arr) {
    let step = Number(arr.pop());
    let result = [];
    for (let i = 0; i < arr.length; i += step) {
        
        result.push(arr[i]);
    }

    console.log(result.join(' '));
}
printNthElements(['5', '20', '31', '4', '20', '2']);
printNthElements(['dsa', 'asd', 'test', 'test', '2']);