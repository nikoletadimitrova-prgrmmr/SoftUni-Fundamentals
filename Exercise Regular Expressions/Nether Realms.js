function netherRealms(input) {
  let demons = input.split(/[, ]+/).filter(x => x !== '').sort((a, b) => a.localeCompare(b));

  for (let demon of demons) {
    let healthChars = demon.match(/[^0-9+\-*/.]/g);
    let health = 0;
    if (healthChars) {
      health = healthChars.map(ch => ch.charCodeAt(0)).reduce((a, b) => a + b, 0);
    }

    let damageNums = demon.match(/[-+]?\d+(\.\d+)?/g);
    let damage = 0;
    if (damageNums) {
      damage = damageNums.map(Number).reduce((a, b) => a + b, 0);
    }

    let modifiers = demon.match(/[*\/]/g);
    if (modifiers) {
      for (let symbol of modifiers) {
        if (symbol === '*') damage *= 2;
        else if (symbol === '/') damage /= 2;
      }
    }

    console.log(`${demon} - ${health} health, ${damage.toFixed(2)} damage`);
  }
}

netherRealms('M3ph-0.5s-0.5t0.0**');
