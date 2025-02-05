document.getElementById('click').onclick = function() 
{

    // Clears the error message from the last input
    document.getElementById('output').innerHTML = "";
    document.getElementById('output').classList.remove('printError', 'passwordSafe'); //clears color, found a bug that if you put in a valid password and then an invalid one, the errors would be in green, this stops that

    let password = document.getElementById('password').value; 
    let errors = []; // Array to store error messages


    // Check password length
    if (password.length < 8) 
        {
        errors.push("Password must be 8 or more characters long");
        }


    // Check for special character
    let specialChars = "!@#$%^&*()-_+=[]{}|;:',.<>?/`~";
    let foundSpecialChar = false;

    for (let c of password) 
        {
        if (specialChars.includes(c)) 
            {
            foundSpecialChar = true;
            break;
        }
    }

    if (!foundSpecialChar) 
        {
        errors.push("Password must contain at least one special character");
    }


    // Check for spaces
    for (let c of password) 
        {
        if (c === " ") 
            {
            errors.push("Password must NOT contain any spaces");
            break;
        }
    }


    // Check for uppercase letter
    let upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let foundUpperChar = false;

    for (let c of password) 
        {
        if (upperChar.includes(c)) 
            {
            foundUpperChar = true;
            break;
        }

    }
    if (!foundUpperChar) 
        {
        errors.push("Password must contain at least one uppercase character");
    }


    // Check for lowercase letter
    let lowerCase = "abcdefghijklmnopqrstuvwxyz";
    let foundLowerCase = false;

    for (let c of password) {
        if (lowerCase.includes(c)) {
            foundLowerCase = true;
            break;
        }

    }
    if (!foundLowerCase) 
        {
        errors.push("Password must contain at least one lowercase character");
    }


    // Check for a number
    let number = "1234567890";
    let foundNumber = false;

    for (let c of password) 
        {
        if (number.includes(c)) 
            {
            foundNumber = true;
            break;
        }

    }
    if (!foundNumber) 
        {
        errors.push("Password must contain at least one number");
    }


    // error and valid messages

    if (errors.length > 0) 
        {
        document.getElementById('output').innerHTML = `Password Invalid! <br> ${errors.join("<br>")}`; //calls the errors array
        document.getElementById('output').classList.add('printError'); //makes it red
    } 
    else 
    {
        document.getElementById('output').innerHTML = "Password is valid!"; 
        document.getElementById('output').classList.add('passwordSafe'); //makes it green
    }

}; //end passwordChecker.js