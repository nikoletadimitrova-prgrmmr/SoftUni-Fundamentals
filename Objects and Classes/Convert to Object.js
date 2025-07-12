function convertToObject(JSONString){
    let object = JSON.parse(JSONString);
    let getAll = Object.entries(object);
    for(let[key, value] of getAll){
        console.log(`${key}: ${value}`);
        
    }
    
}
convertToObject('{"name": "George", "age": 40, "town": "Sofia"}')