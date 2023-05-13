const repeatString = function(str, numTimes) {
    if (numTimes < 0) return "ERROR";

    let repeatedStr = "";
    for (let i = 0; i < numTimes; i++) {
        repeatedStr += str;
    }
    return repeatedStr;
};

// Do not edit below this line
module.exports = repeatString;
