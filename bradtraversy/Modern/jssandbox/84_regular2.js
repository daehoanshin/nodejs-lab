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

// String to match
const str = 'Gray?';

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