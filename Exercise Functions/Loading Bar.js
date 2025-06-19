// function loadingBar(number) {
//     if(number === 0) {
//         console.log(`${number}% [..........]`);
//         console.log('Still loading...');
        
//     } else if(number === 10) {
//         console.log(`${number}% [%.........]`);
//         console.log('Still loading...');
//     } else if(number === 20) {
//         console.log(`${number}% [%%........]`);
//         console.log('Still loading...');
//     } else if(number === 30) {
//         console.log(`${number}% [%%%.......]`);
//         console.log('Still loading...');
//     } else if(number === 40) {
//         console.log(`${number}% [%%%%......]`);
//         console.log('Still loading...');
//     } else if(number === 50) {
//         console.log(`${number}% [%%%%%.....]`);
//         console.log('Still loading...');
//     } else if(number === 60) {
//         console.log(`${number}% [%%%%%%....]`);
//         console.log('Still loading...');
//     } else if(number === 70) {
//         console.log(`${number}% [%%%%%%%..]`);
//         console.log('Still loading...');
//     } else if(number === 80) {
//         console.log(`${number}% [%%%%%%%%..]`);
//         console.log('Still loading...');
//     } else if(number === 90) {
//         console.log(`${number}% [%%%%%%%%%.]`);
//         console.log('Still loading...');
//     } else {
//         console.log('100% Complete!');
//         console.log(`${number}% [%%%%%%%%%%]`);
//     }
    
// }
// loadingBar(30);

function loadingBar(num) {
    let percentSymbols = "%".repeat(num / 10);
    let dotSymbols = ".".repeat(10 - num / 10);

    if (num === 100) {
        console.log("100% Complete!");
        console.log("[%%%%%%%%%%]");
    } else {
        console.log(`${num}% [${percentSymbols}${dotSymbols}]`);
        console.log("Still loading...");
    }
}
loadingBar(30)