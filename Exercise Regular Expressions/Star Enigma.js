function starEnigma(lines) {
  let n = Number(lines.shift()); 
  let attacked = [];
  let destroyed = [];

  for (let i = 0; i < n; i++) {
    let message = lines[i];

    let key = (message.match(/[starSTAR]/g) || []).length;

    let decrypted = message
      .split('')
      .map(ch => String.fromCharCode(ch.charCodeAt(0) - key))
      .join('');

    let pattern = /@(?<planet>[A-Za-z]+)[^@\-!:>]*:(?<population>\d+)[^@\-!:>]*!(?<attackType>[AD])![^@\-!:>]*->(?<soldiers>\d+)/;
    let match = decrypted.match(pattern);

    if (match) {
      let { planet, attackType } = match.groups;

      if (attackType === 'A') {
        attacked.push(planet);
      } else if (attackType === 'D') {
        destroyed.push(planet);
      }
    }
  }

  attacked.sort((a, b) => a.localeCompare(b));
  destroyed.sort((a, b) => a.localeCompare(b));

  console.log(`Attacked planets: ${attacked.length}`);
  attacked.forEach(p => console.log(`-> ${p}`));

  console.log(`Destroyed planets: ${destroyed.length}`);
  destroyed.forEach(p => console.log(`-> ${p}`));
}


starEnigma([
  '2',
  'STCDoghudd4=63333$D$0A53333',
  'EHfsytsnhf?8555&I&2C9555SR'
]);
