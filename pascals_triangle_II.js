var getRow = function(rowIndex) {
    let prev  = []

    for(let i = 0; i <= rowIndex; i++){
        let newRow = []
        newRow[0] = newRow[i] = 1
        for(let j = 1; j < i; j ++ ){
            newRow[j] = prev[ j - 1] + prev[j]

        }
        prev = newRow


    }
    return prev
    
};