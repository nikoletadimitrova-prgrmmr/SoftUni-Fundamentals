function passwordValidator(password) {
    let isValid = true;

    if (password.length < 6 || password.length > 10) {
        console.log('Password must be between 6 and 10 characters');
        isValid = false;
    }


    let allowed = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let textLower = password.toLowerCase();

    for (let i = 0; i < textLower.length; i++) {
        if (!allowed.includes(textLower[i])) {
            console.log('Password must consist only of letters and digits');
            isValid = false;
            break;
        }
    }


    let digitsCount = 0;

    for (let i = 0; i < password.length; i++) {
        if (password[i] >= '0' && password[i] <= '9') {
            digitsCount++;
        }
    }

    if (digitsCount < 2) {
        console.log('Password must have at least 2 digits');
        isValid = false;
    }


    if (isValid) {
        console.log('Password is valid');
    }
}

passwordValidator('logIn');    
passwordValidator('MyPass12');  
