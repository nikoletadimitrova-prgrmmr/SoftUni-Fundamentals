// let result =  {
//     multiply: (num1, num2) => num1 * num2,
//     divide: (num1, num2) => num1 / num2,
//     add: (num1, num2) => num1 + num2,
//     subtract: (num1, num2) => num1 - num2,
// };

// // let calculator = (num1, num2, operator) => result[operator](num1, num2);;
// // console.log(calculator(5, 3, 'multiply'));

function calculator(num1, num2, operator) {
    let result = {
        multiply: (a, b) => a * b,
        divide: (a, b) => a / b,
        add: (a, b) => a + b,
        subtract: (a, b) => a - b,
    };

    console.log(result[operator](num1, num2));
}

calculator(5, 3, 'add'); 

