function longestPalindrome(str: string): number {
  const strMap = new Map<string, number>();

  for (let idx = 0; idx < str.length; idx++) {
    if (strMap.has(str[idx])) {
      let freq = Number(strMap.get(str[idx]));

      freq += 1;
      strMap.set(str[idx], freq);
    } else strMap.set(str[idx], 1);
  };

  let maxOddFreq = 0;
  let maxLength = 0;

  console.log(strMap);

  strMap.forEach((val, key) => {
    if (val % 2 == 0) maxLength += val;
    else {
      maxLength += val - 1;
      if (val > maxOddFreq) maxOddFreq = val;
    };
  });

  if (maxOddFreq > 0) return maxLength + 1;
  else return maxLength;
};

// console.log(longestPalindrome("ccc"));
// console.log(longestPalindrome("bb"));
console.log(longestPalindrome("abccccdd"));
