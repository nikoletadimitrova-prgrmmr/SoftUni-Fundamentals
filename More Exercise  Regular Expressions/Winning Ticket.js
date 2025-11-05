function winningTicket(input) {
  let tickets = input.split(/[\s,]+/).filter(t => t.length > 0);

  for (let ticket of tickets) {
    if (ticket.length !== 20) {
      console.log("invalid ticket");
      continue;
    }

    let leftHalf = ticket.slice(0, 10);
    let rightHalf = ticket.slice(10);

    let pattern = /([@#$^])\1{5,9}/;

    let leftMatch = leftHalf.match(pattern);
    let rightMatch = rightHalf.match(pattern);

    if (leftMatch && rightMatch) {
      let matchSymbol = leftMatch[1];
      let matchLength = Math.min(leftMatch[0].length, rightMatch[0].length);

      if (matchLength === 10) {
        console.log(`ticket "${ticket}" - ${matchLength}${matchSymbol} Jackpot!`);
      } else {
        console.log(`ticket "${ticket}" - ${matchLength}${matchSymbol}`);
      }
    } else {
      console.log(`ticket "${ticket}" - no match`);
    }
  }
}

