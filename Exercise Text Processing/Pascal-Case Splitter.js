function pascalCaseSplitter(str) {
  const words = str.match(/[A-Z][a-z]*/g); // Match capital letter followed by lowercase letters
  console.log(words.join(', '));
}

// Example usage:
pascalCaseSplitter("'SplitMeIfYouCanHaHaYouCantOrYouCan'");
