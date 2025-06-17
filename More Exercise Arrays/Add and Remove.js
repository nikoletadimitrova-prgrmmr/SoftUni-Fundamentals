function addandRemove(arr) {

    let result = [];
    let number = 1;

    for (let command of arr) {
        if (command === "add") {
            result.push(number);
        } else if (command === "remove") {
            result.pop();
        }
        number++;
    }

    if (result.length === 0) {
        console.log("Empty");
    } else {
        console.log(result.join(' '));
    }

}
addandRemove(['add', 'add', 'add', 'add']);
addandRemove(['add', 'add', 'remove', 'add', 'add']);
addandRemove(['remove', 'remove', 'remove']);