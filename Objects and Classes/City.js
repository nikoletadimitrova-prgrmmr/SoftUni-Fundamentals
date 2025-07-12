function city(object) {
    let getAll = Object.entries(object);
    for(let [key, value] of getAll) {
        console.log(`${key} -> ${value}`);
    }
}
city({

name: "Plovdiv",

area: 389,

population: 1162358,

country: "Bulgaria",

postCode: "4000"

})