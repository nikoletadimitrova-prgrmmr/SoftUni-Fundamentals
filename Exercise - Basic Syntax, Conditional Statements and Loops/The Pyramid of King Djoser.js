function thePyramindOfKingDjoser(base, increment) {
    let stone = 0;
    let marble = 0;
    let lapisLazuli = 0;
    let gold = 0;
    let height = 0;

    let step = 0;

    while (base > 2) {
        step++;
        let innerBase = base - 2;
        let area = base * base;
        let size = innerBase * innerBase;

        let stoneNeeded = size * increment;
        let decorationNeeded = (area - size) * increment;

        stone += stoneNeeded;

        if (step % 5 === 0) {
            lapisLazuli += decorationNeeded;
        } else {
            marble += decorationNeeded;
        }

        base -= 2;
    }


    step++;
    let goldNeeded = base * base * increment;
    gold += goldNeeded;

    height = Math.floor(step * increment);

    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuli)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${height}`);
}
thePyramindOfKingDjoser(11, 1)