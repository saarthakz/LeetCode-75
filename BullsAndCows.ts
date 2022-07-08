function getHint(secret: string, guess: string): string {

  const secretMap = new Map<string, Set<number>>();

  for (let idx = 0; idx < secret.length; idx++) {
    if (secretMap.has(secret[idx])) {
      const indexSet = secretMap.get(secret[idx]);
      if (indexSet != undefined) {
        indexSet.add(idx);
        secretMap.set(secret[idx], indexSet);
      };
    } else secretMap.set(secret[idx], new Set<number>().add(idx));
  };

  let bullCount = 0;
  let cowCount = 0;
  const matchedIndices = new Set<number>();

  for (let idx = 0; idx < guess.length; idx++) {
    if (secretMap.has(guess[idx])) {
      const indexSet = secretMap.get(guess[idx]);
      if (indexSet != undefined) {
        if (indexSet.has(idx)) {
          bullCount += 1;
          indexSet.delete(idx);
          matchedIndices.add(idx);
          secretMap.set(guess[idx], indexSet);
        };
      };
    };
  };

  const guessMap = new Map<string, Array<number>>();

  for (const pair of secretMap.entries()) {
    guessMap.set(pair[0], Array.from(pair[1]));
  };

  for (let idx = 0; idx < guess.length; idx++) {
    if (matchedIndices.has(idx)) continue;
    if (guessMap.has(guess[idx])) {
      const indices = guessMap.get(guess[idx]);
      if (indices && indices.length > 0) {
        indices.pop();
        cowCount += 1;
        guessMap.set(guess[idx], indices);
      };
    };
  };


  return `${bullCount}A${cowCount}B`;
};


console.log(getHint("1123", "0111"));
console.log(getHint("1807", "7810"));