var climbStairs = function(n) {
    let result = new Array(n)

    const fibo = (n) => {
        if(n <= 1) return 1

        if(result[n - 1]) return result[n]

        result[n] = fibo(n - 1)  + fibo(n - 2)

        return result[n]
    }

    return fibo(n) 
    
};