function santasHelper(inputLines) {
    const key = Number(inputLines[0]);
    const goodChildren = [];

    for (let i = 1; i < inputLines.length; i++) {
        const line = inputLines[i];
        if (line === 'end') break;

        let decrypted = '';
        for (const ch of line) {
            decrypted += String.fromCharCode(ch.charCodeAt(0) - key);
        }

        const regex = /@([A-Za-z]+)[^@\-!:>]*!([GN])!/;
        const match = regex.exec(decrypted);
        if (match && match[2] === 'G') {
            goodChildren.push(match[1]);
        }
    }
}