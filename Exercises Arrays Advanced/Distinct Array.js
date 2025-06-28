function distinctArray(arr) {
    let unique = arr.filter((value, index) => {
        return arr.indexOf(value) === index;
    });

    

    console.log(unique.join(' '));
}


// function distinctArray(arr) {
//     let unique = [];
//     let duplicates = [];

//     for (let i = 0; i < arr.length; i++) {
//         let current = arr[i];
//         if (!unique.includes(current)) {
//             unique.push(current);
//         } else if (!duplicates.includes(current)) {
//             duplicates.push(current);
//         }
//     }

//     if (duplicates.length === 0) {
//         console.log('No repeating elements');
//     } else {
//         let formatted = duplicates.length === 1
//             ? duplicates[0]
//             : duplicates.slice(0, -1).join(', ') + ' and ' + duplicates.slice(-1);
        
//         console.log(`${formatted} are already present in the array è remove them`);
//     }
// }

distinctArray([7, 8, 9, 7, 2, 3,

4, 1, 2])