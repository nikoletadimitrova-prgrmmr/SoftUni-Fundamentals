function matchPhoneNumbers(input) {
  let text = input[0];
  let regex = /\+359([ -])2\1\d{3}\1\d{4}\b/g;

  let matches = text.match(regex);
  console.log(matches.join(', '));
}

