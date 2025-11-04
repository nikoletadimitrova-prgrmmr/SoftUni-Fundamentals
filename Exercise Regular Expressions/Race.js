function race(input) {
  let racers = input.shift().split(', ');
  let results = {};

  let namePattern = /[A-Za-z]/g;
  let numberPattern = /\d/g;

  for (let line of input) {
    if (line === 'end of race') break;

    let nameMatch = line.match(namePattern);
    let numberMatch = line.match(numberPattern);

    if (!nameMatch) continue;

    let name = nameMatch.join('');
    let distance = numberMatch ? numberMatch.map(Number).reduce((a, b) => a + b, 0) : 0;

    if (racers.includes(name)) {
      results[name] = (results[name] || 0) + distance;
    }
  }

  let sorted = Object.entries(results)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3);

  let positions = ['1st place', '2nd place', '3rd place'];

  sorted.forEach(([name], index) => {
    console.log(`${positions[index]}: ${name}`);
  });
}
