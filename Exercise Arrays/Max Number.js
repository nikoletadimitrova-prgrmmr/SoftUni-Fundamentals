// function maxNumber(arr) {

//     let topIntegers = [];

//     for (let i = 0; i < arr.length; i++) {
//         let isTop = true;

//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] <= arr[j]) {
//                 isTop = false;
//                 break;
//             }
//         }

//         if (isTop) {
//             topIntegers.push(arr[i]);
//         }
//     }

//     console.log(topIntegers.join(' '));
// }

function maxNumber(arr) {
    let result = [];
    let maxRight = Number.NEGATIVE_INFINITY;

    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] > maxRight) {
            result.unshift(arr[i]);
            maxRight = arr[i];
        }
    }

    console.log(result.join(' '));
}
maxNumber([1, 4, 3, 2])