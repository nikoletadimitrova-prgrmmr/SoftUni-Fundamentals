function extractValidDates(input) {
  let text = input[0];
  let datePattern = /\b(?<day>\d{2})([.\-\/])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})\b/g;

  let match;
  while ((match = datePattern.exec(text)) !== null) {
    let { day, month, year } = match.groups;
    console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
  }
}
