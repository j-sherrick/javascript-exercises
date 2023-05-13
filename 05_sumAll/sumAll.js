const sumAll = function(start, end) {
    // Return ERROR if start or end is not specifically a number
    if (typeof start !== "number" || typeof end !== "number")
    // REVIEW NOTE: Above would still accept floating point numbers which is a problem! The Odin solution is best:
    // if (!Number.isInteger(min) || !Number.isInteger(max))
        return "ERROR";
    // Return ERROR if start or end is negative
    if (start < 0 || end < 0)
        return "ERROR";

    let sum = 0;
    // Decides whether we're incrementing or decrementing
    const next = start < end ? 1 : -1;
    while (start !== end)
    {
        sum += start;
        start += next;
    }
    sum += end;

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
