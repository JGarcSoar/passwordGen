// RANDOM PASSWORD GENERATOR

const passLength = 16;
const incLower = true;
const incUpper = true;
const incNum = true;
const incSym = true;

function genPassword(length, incLower, incUpper, incNum, incSym){

    const lowerChars = "abcdefghijklmnopqrstuvwxyz";
    const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numChars = "1234567890";
    const symChars = "!@#$%^&*()_+-=";

    let allowedChars = "";
    let password = "";

    allowedChars += incLower ? lowerChars : "";
    allowedChars += incUpper ? upperChars : "";
    allowedChars += incNum ? numChars : "";
    allowedChars += incSym ? symChars : "";


    if(length <= 2){
        return `(Password lenght must be at least 3 characters.)`
    }
    
    if(allowedChars.length === 0){
        return `(At least 1 set of characters must be selected.)`
    }

    for(let i =0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length)
        password += allowedChars[randomIndex]

    }

    return password;
}

const password = genPassword(passLength, incLower, incUpper, incNum, incSym);

console.log(`Generated password: ${password}`)
