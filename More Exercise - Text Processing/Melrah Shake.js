function melrahShake(input) {
  let text = input[0];
  let pattern = input[1];

  while (pattern.length > 0) {
    const firstIndex = text.indexOf(pattern);
    const lastIndex = text.lastIndexOf(pattern);

    if (firstIndex === -1 || lastIndex === -1 || firstIndex === lastIndex) {
      console.log("No shake.");
      console.log(text);
      return;
    }

    text =
      text.slice(0, firstIndex) +
      text.slice(firstIndex + pattern.length, lastIndex) +
      text.slice(lastIndex + pattern.length);

    console.log("Shaked it.");

    const middleIndex = Math.floor(pattern.length / 2);
    pattern = pattern.slice(0, middleIndex) + pattern.slice(middleIndex + 1);
  }

  console.log("No shake.");
  console.log(text);
}
melrahShake(['astalavista baby',

'sta'])
