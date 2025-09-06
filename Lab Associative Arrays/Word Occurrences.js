function wordOccurrences(arr) {
    let map = new Map();

    for(let word of arr) {
        if(map.has(word)) {
            let current = map.get(word);
            current ++;

            map.set(word, current)
        } else {
            map.set(word, 1)
        }
    }

    let sorted = Array.from(map.entries())
        .sort((a, b) => b[1] - a[1]);

    for(let [key, value] of sorted) {
        console.log(`${key} -> ${value} times`);
        
    }
}
wordOccurrences(["Here", "is", "the", "first", "sentence",

"Here", "is", "another", "sentence", "And",

"finally", "the", "third", "sentence"])