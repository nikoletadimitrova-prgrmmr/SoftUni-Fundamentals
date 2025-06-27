function lastKNumberSequence(n, k) {
    let result = [1];

    for (let i = 1; i < n; i++) {
        let previousK = result.slice(-k);
        let next = previousK.reduce((a, b) => a + b, 0);
        result.push(next);
    }

    console.log(result.join(' '));
}
lastKNumberSequence(6, 3)