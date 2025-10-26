function wordsTrackers(arr) {
   let searchedWords = arr[0].split(' ');
    let counts = new Map();

    for (let word of searchedWords) {
        counts.set(word, 0);
    }

    for (let i = 1; i < arr.length; i++) {
        let word = arr[i];
        if (counts.has(word)) {
            counts.set(word, counts.get(word) + 1);
        }
    }

    let sorted = Array.from(counts.entries()).sort((a, b) => b[1] - a[1]);

    for (let [word, count] of sorted) {
        console.log(`${word} - ${count}`);
    }
}
wordsTrackers([

    'this sentence',

    'In', 'this', 'sentence', 'you', 'have',

    'to', 'count', 'the', 'occurrences', 'of',

    'the', 'words', 'this', 'and', 'sentence',

    'because', 'this', 'is', 'your', 'task'

])