function aMainerTask(arr) {
    let resources = new Map();

    let index = 0;

    for (let item of arr) {
        if (index % 2 === 0) {

            let resource = item;
            let quantity = Number(arr[index + 1]);

            if (!resources.has(resource)) {
                resources.set(resource, 0);
            }

            resources.set(resource, resources.get(resource) + quantity);
        }
        index++;
    }

    for (let [resource, quantity] of resources) {
        console.log(`${resource} -> ${quantity}`);
    }

}
aMainerTask([

'Gold',

'155',

'Silver',

'10',

'Copper',

'17'

])