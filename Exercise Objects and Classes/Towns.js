function towns(arr){
   
    for(let i = 0; i < arr.length; i++) {
        let [town, latitude, longitude] = arr[i].split('|');
        //console.log(town, latitude, longitude);

        town = town.trim();
        latitude = Number(latitude).toFixed(2);
        longitude = Number(longitude).toFixed(2);


        let towns = {
            town: town,
            latitude: latitude,
            longitude: longitude
        }

        console.log(towns);

    }
}
towns(['Sofia | 42.696552 | 23.32601',

'Beijing | 39.913818 | 116.363625'])