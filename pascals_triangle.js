// Given an integer numRows, return the first numRows of Pascal's triangle.
// In Pascal's triangle, each number is the sum of the two numbers directly above it

var generate = function(numRows) {
    let prev = []
    let result = []
    result.push([1])

    for(let i = 1; i < numRows; i ++){
        prev = result[ i - 1]
        let newRow = []
        newRow[0] = newRow[i] = 1
        for(let j = 1; j < i; j ++){
            newRow[j] = prev[j - 1] +  prev[j ]
        }
        result.push(newRow)
    }
    return result
};