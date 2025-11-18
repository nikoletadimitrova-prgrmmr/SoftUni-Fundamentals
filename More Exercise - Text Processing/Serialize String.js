function serializeString(input) {
  const str = input[0];
  const result = {};

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (!result[char]) {
      result[char] = [];
    }
    result[char].push(i);
  }

  for (const char in result) {
    console.log(`${char}:${result[char].join('/')}`);
  }
}

serializeString(["abababa"])