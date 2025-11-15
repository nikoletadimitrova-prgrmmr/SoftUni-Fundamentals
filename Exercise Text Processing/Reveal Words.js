function revealWords(text, template) {

  const words = text.split(', ');
  const templateParts = template.split(' ');

  let wordIndex = 0;
  const result = templateParts.map(part => {
    if (part.includes('*')) {
      const replacement = words.find(word => word.length === part.length);
      if (replacement) {
        words.splice(words.indexOf(replacement), 1);
        return replacement;
      }
    }
    return part;
  });

  return result.join(' ');

}
revealWords('great',

'softuni is ***** place for learningnew programming languages')