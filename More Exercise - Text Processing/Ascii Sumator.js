function asciiSumator(input) {
  const firstChar = input[0];
  const secondChar = input[1];
  const text = input[2];

  const start = Math.min(firstChar.charCodeAt(0), secondChar.charCodeAt(0));
  const end = Math.max(firstChar.charCodeAt(0), secondChar.charCodeAt(0));

  let sum = 0;

  for (let char of text) {
    const code = char.charCodeAt(0);
    if (code > start && code < end) {
      sum += code;
    }
  }

  console.log(sum);
}
asciiSumator(['.',

'@',

'dsg12gr5653feee5'])