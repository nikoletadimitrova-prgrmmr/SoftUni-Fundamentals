function lengendaryFarming(str) {
     let keyMaterials = {
        shards: 0,
        fragments: 0,
        motes: 0
    };
    let junk = {};

    let obtained = false;

    let items = str.split(' '); 

    for (let i = 0; i < items.length; i += 2) {
        let quantity = Number(items[i]);
        let material = items[i + 1].toLowerCase();

        if (material === 'shards' || material === 'fragments' || material === 'motes') {
            keyMaterials[material] += quantity;

            if (keyMaterials[material] >= 250) {
                keyMaterials[material] -= 250;
                let item;
                if (material === 'shards') item = 'Shadowmourne';
                else if (material === 'fragments') item = 'Valanyr';
                else if (material === 'motes') item = 'Dragonwrath';

                console.log(`${item} obtained!`);
                obtained = true;
                break;
            }
        } else {
            if (!junk.hasOwnProperty(material)) {
                junk[material] = 0;
            }
            junk[material] += quantity;
        }
    }

    Object.entries(keyMaterials)
        .sort((a, b) => {
            if (b[1] !== a[1]) return b[1] - a[1];
            return a[0].localeCompare(b[0]);
        })
        .forEach(([material, qty]) => console.log(`${material}: ${qty}`));

    Object.entries(junk)
        .sort((a, b) => a[0].localeCompare(b[0]))
        .forEach(([material, qty]) => console.log(`${material}: ${qty}`));
}
lengendaryFarming('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards');