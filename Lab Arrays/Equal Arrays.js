function equalArrays(arr1, arr2) {
    let firstAray = arr1.map(Number);
    let secondAray = arr2.map(Number);
    let sum = 0;

    for (let i = 0; i < firstAray.length; i ++) {

            if (firstAray[i] === secondAray[i]) {
                sum += firstAray[i];
              //console.log(sum);
            } else {
                console.log(`Arrays are not identical. Found difference at ${i} index`);
                return;
            }
    }

    console.log(`Arrays are identical. Sum: ${sum}`);
    
}
equalArrays(['1','2','3','4','5'],

['1','2','4','4','5']);