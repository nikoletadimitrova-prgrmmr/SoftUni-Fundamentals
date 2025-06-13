function primeNumberChecker(num) {
    if (num <= 1) {
        console.log('false');
    } else {
        let primeNumberChecker = true;

        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                primeNumberChecker = false;
                break;
            }
        }

        if (primeNumberChecker) {
            console.log("true");
        } else {
            console.log("false");
        }
    }
}
primeNumberChecker(6)