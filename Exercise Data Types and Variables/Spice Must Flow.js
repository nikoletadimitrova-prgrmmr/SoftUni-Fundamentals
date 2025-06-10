function spiceMustFlow(startingYield) {
    let current = startingYield;
    let total = 0;
    let days = 0;
    
    while (current >= 100) {
        days++;
        total += current;
        total -= 26; 
        current -= 10;
    }

    if (total >= 26) {
        total -= 26;
    } else {
        total = 0;
    }

    console.log(days);
    console.log(total);
}

spiceMustFlow(111)