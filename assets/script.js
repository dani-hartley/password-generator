// Password Generator Functions

//1. Present prompts for password criteria
//    *Length: Length must be 8-128 characters
//    *Character Type: Must include at least 1 character
//        *lowercase, 
//        *uppercase, 
//        *numeric, 
//        *and/or special characters
//2. Generate password that mights the critera
//        * Display in alert on written in page


//Password Variables - Arrays
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var special = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '=', ',', '.', '<', '>', '?', '/'];

// User prompts - Define password criteria
// Generate Function

var generatePassword = function () {
    // User chooses password length
    var confirmlength = parseInt(prompt("How many characters would you like in your password? Choose between 8 and 128"));
    if (isNaN(confirmlength) === true) {
        alert("Must be a number!")
        return generatePassword();
    }
    //confirm length is within the correct parameters 
    if (confirmlength < 8 || confirmlength > 128) {
        alert("Password length must be between 8-128 characters. Try again.");
        return generatePassword();
    }

    // User prompt for Characters 
    // Lowercase, uppercase, numeric, and/or special characters
    var includeLower = confirm("Do you want to include lowercase characters?");
    var includeUpper = confirm("Do you want to include uppercase characters?");
    var includeNumber = confirm("Do you want to include numeric characters?");
    var includeSpecial = confirm("Do you want to include special characters?");
    // Condition - must include at least one characters type
    if (!includeLower && !includeUpper && !includeNumber && !includeSpecial) {
        alert("Your password must contain at least one lowercase, uppercase, numeric, or special character");
        return generatePassword();
    }
};