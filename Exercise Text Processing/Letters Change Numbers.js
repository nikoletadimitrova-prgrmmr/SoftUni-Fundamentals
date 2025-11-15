function letterChangeNumbers(input) {
  const parts = input.trim().split(/\s+/);
  let total = 0;

  for (let part of parts) {
    const firstChar = part[0];
    const lastChar = part[part.length - 1];
    const number = Number(part.slice(1, -1));

    let result = number;

    // Get alphabet position (A=1, B=2, ..., a=1, b=2, ...)
    const getPosition = (ch) => {
      return ch.toLowerCase().charCodeAt(0) - 96;
    };

    const firstPos = getPosition(firstChar);
    if (firstChar === firstChar.toUpperCase()) {
      result /= firstPos;
    } else {
      result *= firstPos;
    }

    const lastPos = getPosition(lastChar);
    if (lastChar === lastChar.toUpperCase()) {
      result -= lastPos;
    } else {
      result += lastPos;
    }

    total += result;
  }

  console.log(total.toFixed(2));
}


letterChangeNumbers("A12b s17G");  
