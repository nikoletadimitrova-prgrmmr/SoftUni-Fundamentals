function rageQuit(input) {
  if (!input) input = '';
  input = String(input).toUpperCase();

  let result = '';
  const pattern = /([^0-9]+)(\d+)/g;
  let match;

  while ((match = pattern.exec(input)) !== null) {
    const [_, str, count] = match;
    result += str.repeat(Number(count));
  }

  const uniqueSymbols = new Set(result).size;

  console.log(`Unique symbols used: ${uniqueSymbols}`);
  console.log(result);
}


rageQuit('a3');          
rageQuit('aSd2&5s@1');   
