var getRow = function(rowIndex) {
    let result = [[1]]
    let prev  = []

    for(let i = 1; i < rowIndex; i++){
        let newRow = []
        newRow[0] = newRow[i] = 1
        prev = result[ i - 1]
        for(let j = 1; j < i; j ++ ){
            newRow[j] = prev[ j - 1] + prev[j]

        }


    }
    return result[rowIndex]
    
};