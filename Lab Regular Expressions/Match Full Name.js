function isValidFullName(name) {
    let validNames = [];
    let pattern = /(\b[A-Z][a-z]+ [A-Z][a-z]+\b)/g;

    let validName;
    while (validName = pattern.exec(name)) {
        validNames.push(validName[0]);
    }
    console.log(validNames.join(' '));
}
