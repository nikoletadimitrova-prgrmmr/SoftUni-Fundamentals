function sequences(arr){
    let unique = [];     
    let seen = new Set(); 

    for (let line of arr) {
        
        let array = JSON.parse(line);

        let sortedArray = array.slice().sort((a, b) => a - b);

        let key = sortedArray.join(',');

        if (!seen.has(key)) {
            unique.push(sortedArray);
            seen.add(key);
        }
    }

    unique.sort((a, b) => a.length - b.length);

    for (let arr of unique) {
        let descending = arr.slice().sort((a, b) => b - a);
        console.log(`[${descending.join(', ')}]`);
    }
    
}
sequences(["[-3, -2, -1, 0, 1, 2, 3, 4]",

"[10, 1, -17, 0, 2, 13]",

"[4, -3, 3, -2, 2, -1, 1, 0]"])