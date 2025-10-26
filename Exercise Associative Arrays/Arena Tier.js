function arenaTier(arr) {
    let gladiators = new Map(); 

    for (let line of arr) {
        if (line === "Ave Cesar") {
            break;
        }

        if (line.includes('->')) {

            let [name, technique, skill] = line.split(' -> ');
            skill = Number(skill);

            if (!gladiators.has(name)) {
                gladiators.set(name, new Map());
            }

            let techniques = gladiators.get(name);

            if (!techniques.has(technique)) {
                techniques.set(technique, skill);
            } else {

                if (techniques.get(technique) < skill) {
                    techniques.set(technique, skill);
                }
            }

        } else if (line.includes('vs')) {

            let [nameA, nameB] = line.split(' vs ');

            if (gladiators.has(nameA) && gladiators.has(nameB)) {
                let techniquesA = gladiators.get(nameA);
                let techniquesB = gladiators.get(nameB);


                let common = [...techniquesA.keys()].some(t => techniquesB.has(t));

                if (common) {
                    let totalA = [...techniquesA.values()].reduce((a,b) => a+b, 0);
                    let totalB = [...techniquesB.values()].reduce((a,b) => a+b, 0);

                    if (totalA > totalB) {
                        gladiators.delete(nameB);
                    } else if (totalB > totalA) {
                        gladiators.delete(nameA);
                    }

                }
            }
        }
    }


    let sortedGladiators = [...gladiators.entries()]
        .sort((a, b) => {
            let totalA = [...a[1].values()].reduce((x,y)=>x+y, 0);
            let totalB = [...b[1].values()].reduce((x,y)=>x+y, 0);
            return totalB - totalA || a[0].localeCompare(b[0]);
        });

    for (let [name, techniques] of sortedGladiators) {
        let totalSkill = [...techniques.values()].reduce((x,y)=>x+y, 0);
        console.log(`${name}: ${totalSkill} skill`);

        let sortedTechniques = [...techniques.entries()]
            .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));

        for (let [technique, skill] of sortedTechniques) {
            console.log(`- ${technique} <!> ${skill}`);
        }
    }
}
arenaTier([

    'Peter -> BattleCry -> 400',

    'Alex -> PowerPunch -> 300',

    'Stefan -> Duck -> 200',

    'Stefan -> Tiger -> 250',

    'Ave Cesar'

])