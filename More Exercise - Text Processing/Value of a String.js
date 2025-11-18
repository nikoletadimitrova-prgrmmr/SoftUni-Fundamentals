function valueOfAString(input) {
  const str = input[0];
  const caseType = input[1];
  let sum = 0;

  for (let char of str) {
    if (caseType === "UPPERCASE" && char >= 'A' && char <= 'Z') {
      sum += char.charCodeAt(0);
    } else if (caseType === "LOWERCASE" && char >= 'a' && char <= 'z') {
      sum += char.charCodeAt(0);
    }
  }

  console.log(`The total sum is: ${sum}`);
}

valueOfAString(['HelloFromMyAwesomePROGRAM',

'LOWERCASE'])