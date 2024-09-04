
const fib = (n) => {
    let memo = new Array(n + 1).fill(-1)

    const fibonacii = (n) =>{
        if(n === 0 || n === 1) return n
        if(memo[n] !== -1) return memo[n]
        memo[n] = fibonacii(n - 1) + fibonacii(n - 2) 
        return memo[n]
    }
    return fibonacii(n)
    
};