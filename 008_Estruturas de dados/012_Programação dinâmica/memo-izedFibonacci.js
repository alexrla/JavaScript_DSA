function fib(n, memo=[]) {
  if(memo[n] !== undefined) return memo[n];

  if(n <= 2) return 1;

  let res = fib(n - 1, memo) + fib(n - 2, memo);

  memo[n] = res;

  console.log(memo);

  return res;
}

console.log(fib(5));

/*
  - Se livrando do caso base:

  function fib(n, memo=[undefined, 1, 1]) {
    if(memo[n] !== undefined) return memo[n];

    let res = fib(n - 1, memo) + fib(n - 2, memo);

    memo[n] = res;

    console.log(memo);

    return res;
  }
*/

// BIG-O: O(N)