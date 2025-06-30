function jansNotation(arr) {
    let stack = [];

    for (let token of arr) {
        if (!isNaN(token)) {

            stack.push(Number(token));
        } else {

            if (stack.length < 2) {
                console.log("Error: not enough operands!");
                return;
            }


            let b = stack.pop();
            let a = stack.pop();

            let result;


            switch (token) {
                case '+': result = a + b;
                    break;
                case '-': result = a - b;
                    break;
                case '*': result = a * b;
                    break;
                case '/': result = a / b;
                    break;
                default:
                    console.log(`Error: unknown operator "${token}"`);
                    return;
            }

            stack.push(result);
        }
    }

    // After processing all instructions
    if (stack.length === 1) {
        console.log(stack[0]);
    } else if (stack.length > 1) {
        console.log("Error: too many operands!");
    }
}
jansNotation([3,

    4,

    '+'])