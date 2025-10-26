function oddOccurrences(str) {
    let words = str.toLowerCase().split(' ');
    let counts = new Map();

    for (let word of words) {
        if (!counts.has(word)) {
            counts.set(word, 0);
        }
        counts.set(word, counts.get(word) + 1);
    }

    let printed = new Set();
    let result = [];

    for (let word of words) {
        if (counts.get(word) % 2 !== 0 && !printed.has(word)) {
            result.push(word);
            printed.add(word);
        }
    }

    console.log(result.join(' '));

}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')