function postOffice(inputLines) {
    const input = inputLines.join('').replace(/\r?\n/g, '');

    const parts = input.split('|');
    if (parts.length !== 3) return;

    const capMatch = parts[0].match(/([#$%*&])([A-Z]+)\1/);
    if (!capMatch) return;

    const capitalLetters = capMatch[2].split('');

    for (const c of capitalLetters) {
        const lenMatch = parts[1].match(new RegExp(c.charCodeAt(0) + ':(\\d{2})'));
        if (!lenMatch) continue;

        const length = Number(lenMatch[1]);
        const wordMatch = (' ' + parts[2]).match(new RegExp(` (${c}[^ ]{${length}})\\b`));
        if (wordMatch) console.log(wordMatch[1]);
    }
}


postOffice(
    'sdsGGasAOTPWEEEdas$AOTP$|a65:1.2s65:03d79:01ds84:02! -80:07++ABs90:1.1|adsaArmyd Gara So La Arm Armyw21 Argo O daOfa Or Ti Sar saTheww The Parahaos'
);


