function treasureFinder(input) {
  const key = input.shift().split(' ').map(Number);
  let line = input.shift();

  while (line !== 'find') {
    let decrypted = '';
    let keyIndex = 0;

    for (let char of line) {
      const newChar = String.fromCharCode(char.charCodeAt(0) - key[keyIndex]);
      decrypted += newChar;
      keyIndex = (keyIndex + 1) % key.length; // cycle through key
    }

    const type = decrypted.match(/&(.+)&/)[1];
    const coordinates = decrypted.match(/<(.+)>/)[1];

    console.log(`Found ${type} at ${coordinates}`);

    line = input.shift();
  }
}
treasureFinder(["1 2 1 3",

"ikegfp'jpne)bv=41P83X@",

"ujfufKt)Tkmyft'duEprsfjqbvfv=53V55XA",

"find"])