function cutAndReverse(str) {
  const mid = Math.floor(str.length / 2);
  const firstHalf = str.slice(0, mid).split('').reverse().join('');
  const secondHalf = str.slice(mid).split('').reverse().join('');
  
  console.log(firstHalf);
  console.log(secondHalf);
}

// Example usage:
cutAndReverse("'tluciffiDsIsihTgnizamAoSsIsihT'");
