
// Task 1: processArray function
function processArray(arr) {
    return arr.map(num => {
        if (num % 2 === 0) {
            return num * num;
        } else {
            return num * 3;
        }
    });
}

// Task 2: formatArrayStrings function
function formatArrayStrings(stringArray, numberArray) {
    return stringArray.map((str, index) => {
        if (numberArray[index] % 2 === 0) {
            return str.toUpperCase();
        } else {
            return str.toLowerCase();
        }
    });
}
const numbers = [6, 7, 8, 9, 10];
const processedNumbers = processArray(numbers);
console.log(processedNumbers); 

const strings = ["Hello", "Sir", "DCIT 202", "is", "cool"];
const formattedStrings = formatArrayStrings(strings, processedNumbers);
console.log(formattedStrings); 

