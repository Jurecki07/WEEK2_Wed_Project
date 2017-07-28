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


// Write a function that takes a character (i.e. a string of length 1


//   and returns true if it is a vowel 




// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
// Then, write and example of using the function.




function sum(num7, num8) {
    return (num7 + num8)
}

console.log(sum(1, 2))


// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// Then, write and example of using the function.

function avg(num9, num10, num11) {
    return (num9 + num10 + num11) / 3;
}

console.log(avg(8, 9, 10))



// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// Then, write and example of using the function.

function getLength(string) {





}



// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// Then, write and example of using the function.

function greaterThan(num1, num2) {
    if (num1 > num2) {
        return num1
        // take 2 numbers return the largest
    } else if (num1 < num2) {
        return num2;
    } else {

        return " false"
    }
    console.log(greaterThan)(num1, num2)
}






// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// Then, write and example of using the function.

function interdouce(name) {

    console.log("hello, name");
}
interdouce();



// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// Then, write and example of using the function.
