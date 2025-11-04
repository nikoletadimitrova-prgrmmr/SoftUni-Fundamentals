function calculateFurniture(input) {
  let pattern = />>(?<name>[A-Z][A-Za-z]*)<<(?<price>\d+(\.\d+)?)!(?<quantity>\d+)/;
  let boughtFurniture = [];
  let totalMoney = 0;

  for (let line of input) {
    if (line === "Purchase") break;

    let match = pattern.exec(line);
    if (match) {
      let { name, price, quantity } = match.groups;
      boughtFurniture.push(name);
      totalMoney += Number(price) * Number(quantity);
    }
  }

  console.log("Bought furniture:");
  boughtFurniture.forEach(name => console.log(name));
  console.log(`Total money spend: ${totalMoney.toFixed(2)}`);
}
