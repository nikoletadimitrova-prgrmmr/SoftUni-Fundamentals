function hardWord(input) {
  let [letter, words] = input;
  let index = 0;

  letter = letter.replace(/_+/g, (match) => {
    let word = words.find(w => w.length === match.length);
    if (word) {
      words.splice(words.indexOf(word), 1); 
      return word;
    }
    return match; 
  });

  console.log(letter);
}


hardWord(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so_______ things happened. My dad bought me a sled. Mom started a new job as a__________. My brother\'s ankle is ________, and now it bothers me even more.Every night Mom cooks ___ on your recipe because it is the most delicious. Ihope this year Santa will _____ me a robot.',

['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]);
