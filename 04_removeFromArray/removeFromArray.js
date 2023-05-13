const removeFromArray = function(arr, ...args) {
    if (args.length === 0) return arr;

    const newArr = [];
    for (const item of arr)
       if (!args.includes(item)) newArr.push(item);
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
