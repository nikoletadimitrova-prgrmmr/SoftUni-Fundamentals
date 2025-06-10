function townInfo(town, population, area) {
    let data = true;
    
        if (town.length < 3) {
            console.log('Town name must be at least 3 characters!');
            data = false;
        } 

        if (population < 0) {
            console.log(`Population must be a positive number!`);
            data = false;
        } 

        if (area < 0) {
            console.log(`Area must be a positive number!`);
            data = false;
        } 

        if (data) {
            console.log(`Town ${town} has population of ${population} and area ${area} square km.`);
        }
    
}
townInfo('LA',

    1481353,

    512);