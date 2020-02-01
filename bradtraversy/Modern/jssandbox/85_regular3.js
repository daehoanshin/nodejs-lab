let re;
// Literal Characters
re = /hello/;
re = /hello/i;

// Metacharacter Symbols
re = /^/i;          // Must start with
re = / world$/i;    // Must ends with
re = /^hello$/i;    // Must begin and end with
re = /^h.llo$/i;    // Matches any ONE characters
re = /h.llo/i;      // Matches any characters 0 or more time
re = /gre?a?y/i;    // Optional character
re = /gre?a?y\?/i;    // Escape character

// Brackets [] - Character Set
re = /gr[ae]y/i; // Must be an a or e
re = /[GF]ray/i; // Must be an G or F
re = /[^GF]ray/; // Must anything except a G OR F
re = /[A-Z]ray/; // Match any uppercase letter
re = /[a-z]ray/; // Match any lowercase letter
re = /[A-Za-z]ray/; // Match any letter
re = /[0-9][0-9]ray/; // Match any letter

// Braces {} - Quantifiers
re = /Hel{2}o/;     //Must occur exactly {m} amount of times
re = /Hel{2,4}o/i;     //Must occur exactly {m} amount of times
re = /Hel{2,}o/i;     //Must occur at least {m} times

// Paretheses () - Grouping
re = /^([0-9]x){3}$/;

// String to match
const str = '3x3x3x3x';

// Log Results
const result = re.exec(str);
console.log(result);


function reTest(re, str) {
    if(re.test(str)) {
        console.log(`${str} matched ${re.source}`);
    } else {
        console.log(`${str} does NOT match ${re.source}`);
    }
}

reTest(re, str);