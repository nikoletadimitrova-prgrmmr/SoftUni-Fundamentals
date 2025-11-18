function deserializeString(input) {
  let result = [];

  for (let line of input) {
    if (line === 'end') break;

    const [char, indexes] = line.split(':');
    const positions = indexes.split('/').map(Number);

    for (let pos of positions) {
      result[pos] = char;
    }
  }

  console.log(result.join(''));
}
deserializeString(['a:0/2/4/6',

'b:1/3/5',

'end'])