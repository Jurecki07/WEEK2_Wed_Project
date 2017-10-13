// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// Then, write and example of using the function.

function max(num1, num2) {
    if (num1 > num2) {
        return num1
        // take 2 numbers return the largest
    } else if (num1 < num2) {
        return num2;
    } else {

        return " they are equal"
    }
}

max(1, 2);

// console.log(max(1, 2));





// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// Then, write and example of using the function.

// Function will be maxofthree

// take three numbers num1,num2,num3

// return the largest of these numbers

function maxOfThree(num1, num2, num3) {
    let biggestNum;

    if (num1 <= num2) {
        biggestNum = num2;
        //find out which is larger, num1 or num2    
    } else biggestNum = num1;

    if (biggestNum < num3) {
        biggestNum = num3;
        return biggestNum;
        // return the biggest number between the result of the first if and num3
    } else
        return biggestNum;
}



console.log(maxOfThree(1, 17, 5));
console.log(maxOfThree(12, 17, 54));
console.log(maxOfThree(121, 17, 34));



// 3.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// Then, write and example of using the function.
function isVowel(char) {
    if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u" || char === "y") {
        return true;
    }
    else return false;
}



console.log(isVowel("g"));








// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
// Then, write and example of using the function.




function sum(num7, num8) {
    return (num7 + num8)
}

console.log(sum(1, 2));


// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// Then, write and example of using the function.

function avg(num9, num10, num11) {
    return (num9 + num10 + num11) / 3;
}

console.log(avg(8, 9, 10));





// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// Then, write and example of using the function.

var integer = 6;


console.log("This is a " + integer.length);




// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// Then, write and example of using the function.

function greaterThan(num1, num2) {
    if (num1 > num2) {
        return true;
        // take 2 numbers return the largest
    } else if (num1 < num2) {
        return num2;
    } else {

        return " false"
    }
}
    console.log(greaterThan(5, 10));







// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// Then, write and example of using the function.

function interdouce(name) {
    return name = ("Hello" + name);
}

console.log(interdouce("Scotty Doesnt know that Fiona and me ___ every sunday. He thinks shes at church and Scotty doesnt know.. Soctty doesnt know o so dont scotty scotty doesnt know - Matt Damon"));




// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// Then, write and example of using the function.

function madlib( lib1,lib2,lib3,lib4) {
    let lib1 = "quick brown";
    let lib2 = "fox jumps";
    let lib3 = "over the";
    let lib4 = "fence";
    let Imlazy = (lib1,lib2,lib3,lib4);
    return Imlazy;
    
}
