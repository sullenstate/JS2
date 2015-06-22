var word = prompt('Please enter any word...');

alert ('The word you entered is ' + word);
alert (word + ' is exactly ' + word.length + ' characters long!');
alert ('The 3rd letter of "' + word + '" is "' + word.charAt(2) + '"');
alert (word + ' in lower case is ' + word.toLowerCase());
alert ("In uppercase, it's " + word.toUpperCase());
alert ("The second through the fourth letters of " + word + " are " + word.substring(1,2) + ', ' + word.substring(2,3) + ' and ' + word.substring(3,4) + '. This spells "' + word.substring(1,4) + '"!');
alert ("The word " + word + " is easy to use correctly in a sentence if it's a noun: I have always wanted a " + word + ". That obviously sounds pretty weird if " + word + " isn't a noun though!");