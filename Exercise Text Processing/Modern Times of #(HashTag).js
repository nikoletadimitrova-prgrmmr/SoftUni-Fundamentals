function modernTimesOfHashTag(str) {
    const words = str.split(' ');
  for (const word of words) {
    if (word.startsWith('#') && word.length > 1) {
      const tag = word.slice(1);
      if (/^[A-Za-z]+$/.test(tag)) {
        console.log(tag);
      }
    }
  }
}
modernTimesOfHashTag('Nowadays everyone uses # to tag a #special word in #socialMedia')