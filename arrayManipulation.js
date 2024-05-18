//  processArray

function processArray(arr) {
    return arr.map(num => num % 2 === 0 ? num ** 2 : num * 3);
}

module.exports = { processArray };


// formatArrayStrings

function formatArrayStrings(stringsArr, numbersArr) {
    return stringsArr.map((str, index) => {
        if (numbersArr[index] % 2 === 0) {
            return str.toUpperCase();
        } else {
            return str.toLowerCase();
        }
    });
}

module.exports = { processArray, formatArrayStrings };
