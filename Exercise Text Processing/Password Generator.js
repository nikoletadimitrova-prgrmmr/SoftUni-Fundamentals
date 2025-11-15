function passwordGenerator(input) {
  let [firstStr, secondStr, word] = input;
  let combined = (firstStr + secondStr).toLowerCase();
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let wordIndex = 0;

  let password = '';

  for (let char of combined) {
    if (vowels.includes(char)) {
      password += word[wordIndex % word.length].toUpperCase();
      wordIndex++;
    } else {
      password += char;
    }
  }

  let reversedPassword = password.split('').reverse().join('');
  console.log(`Your generated password is ${reversedPassword}`);
}

passwordGenerator([

'ilovepizza',

'ihatevegetables',

'orange'

]);
