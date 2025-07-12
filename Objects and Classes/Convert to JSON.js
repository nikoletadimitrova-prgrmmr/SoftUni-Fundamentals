function convertToJSON(firsName, lastName, hairColor){
    let person = { }
        person.name = firsName,
        person.lastName = lastName,
        person.hairColor = hairColor

    let text = JSON.stringify(person);
    console.log(text);
    
    
}
convertToJSON('George', 'Jones',

'Brown')