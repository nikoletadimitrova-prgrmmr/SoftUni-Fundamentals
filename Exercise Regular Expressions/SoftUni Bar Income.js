function gameBar(input) {
  let pattern = /%([A-Z][a-z]+)%[^\|$%\.]*<(\w+)>[^\|$%\.]*\|(\d+)\|[^\|$%\.]*?(\d+(\.\d+)?)\$/;
  let totalIncome = 0;

  for (let line of input) {
    if (line === "end of shift") break;

    let match = line.match(pattern);
    if (match) {
      let customer = match[1];
      let product = match[2];
      let quantity = Number(match[3]);
      let price = Number(match[4]);

      let totalPrice = quantity * price;
      totalIncome += totalPrice;

      console.log(`${customer}: ${product} - ${totalPrice.toFixed(2)}`);
    }
  }

  console.log(`Total income: ${totalIncome.toFixed(2)}`);
}
