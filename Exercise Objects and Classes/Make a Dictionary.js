function makeADictionary(text){
    // let dictionary = {};

    // for (let json of text) {
    //     let entry = JSON.parse(json);
    //     for (let key in entry) {
    //         dictionary[key] = entry[key];
    //     }
    // }

    // let sortedKeys = Object.keys(dictionary).sort();

    // for (let key of sortedKeys) {
    //     console.log(`Term: ${key} => Definition: ${dictionary[key]}`);
    // }


    //Option 2 

    // let dictionary = {};

    // for (let json of text) {
    //     let entry = JSON.parse(json);
    //     let [[term, definition]] = Object.entries(entry);
    //     dictionary[term] = definition;
    // }

    // let sorted = Object.keys(dictionary).sort();
    // for (let term of sorted) {
    //     console.log(`Term: ${term} => Definition: ${dictionary[term]}`);
    // }



    //Option 3

    let dictionary = {};

    for (let json of text) {
        Object.assign(dictionary, JSON.parse(json));
    }

    Object.keys(dictionary)
        .sort()
        .forEach(term => {
            console.log(`Term: ${term} => Definition: ${dictionary[term]}`);
        });
}
makeADictionary([
'{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of atropical shrub."}',

'{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the publicon a fixed route and for afare."}',

'{"Boiler":"A fuel-burning apparatus or container for heating water."}',

'{"Tape":"A narrow strip of material, typically used to hold or fasten something."}', 

'{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'

])