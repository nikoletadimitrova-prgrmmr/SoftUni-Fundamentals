function buildAWall(arr) {
    let heights = arr.map(Number);

    let targetHeight = 30;
    let concretePerFoot = 195;
    let costPerCubicYard = 1900;

    let dailyConcreteUsage = [];

    function hasIncompleteSections(arr) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < targetHeight) {
                return true;
            }
        }
        return false;
    }

    while (hasIncompleteSections(heights)) {

        let crewsWorking = 0;
        for (let i = 0; i < heights.length; i++) {
            if (heights[i] < targetHeight) {
                crewsWorking++;
                heights[i]++;
            }
        }

        let concreteToday = crewsWorking * concretePerFoot;
        dailyConcreteUsage.push(concreteToday);
    }

    let totalConcrete = 0;
    for (let i = 0; i < dailyConcreteUsage.length; i++) {
        totalConcrete += dailyConcreteUsage[i];
    }
    let totalCost = totalConcrete * costPerCubicYard;

    console.log(dailyConcreteUsage.join(', '));
    console.log(`${totalCost} pesos`);
}
buildAWall([21, 25, 28])