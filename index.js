/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- The solution must be pushed to the repository and be available for the tutors by the end of the day
- You can ask for tutor's help
- You can google / use StackOverflow BUT we suggest you to use just the material provided
*/

/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculates the area of the associated rectangle.
*/

const area = function (l1, l2) {
    return l1 * l2;
}

/* EXERCISE 2
Write a function "crazySum" which receives two integers. It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

const crazySum = function (x, y) {
    if (x === y) {
        return (x + y) * 3;
    } 

    return x + y;
}

console.log(crazySum(9, 3));

/* EXERCISE 3
Write a function "crazyDiff" that computes the absolute difference between a given number and 19. 
It should return triple their absolute difference if the given number is greater than 19.
*/

const crazyDiff = function (x, y = 19) {
    if (x > y) {
        return 3 * Math.abs(x - y);
    }

    return Math.abs(x - y);
}

console.log(crazyDiff(20));

/* EXERCISE 4
Write a function "boundary" which accept an integer n and returns true if n is within 20 and 100 (included) or if it's equal to 400.
*/

const boundary = function (n) {
    if (n >= 20 && n <= 100) {
        return true;
    }
    else if (n === 400) {
        return true;
    };

    return false;

}

console.log(boundary(100));

//************OR************** */


const boundary = function (n) {
    
    return (n >= 20 && n <= 100 || n === 400) ? true : false;

}

console.log(boundary(100));

/* EXERCISE 5
Write a function "strivify" which accepts a string.
It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

const strivify = function (text) {
    if (text.startsWith('Strive')) {
        return text;
    }

    let addedWord = `Strive`;
    return addedWord.concat(text);

}

console.log(strivify(' is the best'));

/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/

const check3and7 = function (x) {
    
    if (x % 3 === 0 || x % 7 === 0) {
        return true;
    }

    return false;

}

console.log(check3and7(15));

/* EXERCISE 7
Write a function "reverseString" to programmatically reverse a given string (es.: Strive => evirtS).
*/

const reverseString = function (s) {
    let reversed = '';
    for(let i = s.length - 1; i >= 0; i--) {
        reversed += s[i];
    }
    return reversed;
}

console.log(reverseString('Strive'));

// **************OR***************

const reverseString = function (s) {
    return s.split("").reverse().join("");
}
console.log(reverseString('Strive'));


/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as a parameter.
*/

const upperFirst = function(str) 
{
    str = str.split(" ");

    for (var i = 0; i < str.length; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }

    return str.join(" ");
}

console.log(upperFirst("this is a test to see if function works"));

/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/

const cutString = function(str) {
    let newString = str.split("");
    newString.pop();
    newString.shift();
    console.log(newString);
}
console.log(cutString("Strive"));

//*************OR************ */
const cutString = function(str) {
    return str.substring(1, str.length - 1);
}
console.log(cutString("Javascript"));

/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

const giveMeRandom = function(n) {
    let array = [];
    for(let i = 0; i < n; i++) {
        let x = Math.floor(Math.random() * 10 + 1);
        array.push(x);
    }
    return array;
}
console.log(giveMeRandom(2));
/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit in Eduflow.
*/