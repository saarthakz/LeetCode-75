function characterReplacement(str: string, opCount: number): number {
  let forwardMaxCount = 0;
  let backwardMaxCount = 0;
  let maxCountChar: string;
  let num = opCount;
  const reversedStr = str.split("").reverse().join("");

  let start = 0;
  let end: number;
  maxCountChar = str[start];

  // Forward Pass
  for (end = 1; end < str.length; end++) {

    if (str[end] != maxCountChar) num -= 1;

    if (num < 0) {
      start += 1;
      maxCountChar = str[start];
      num = opCount;

      for (let idx = start + 1; idx <= end; idx++) {
        if (str[idx] != maxCountChar) num -= 1;
      };

      if (num < 0) {
        end += num;
        num = 0;
      };
    };
    forwardMaxCount = Math.max(forwardMaxCount, end - start + 1);
  };

  if (num > 0 && forwardMaxCount == end - start) {
    if (forwardMaxCount + num <= str.length)
      forwardMaxCount += num;
  };

  start = 0;
  end = 1;
  maxCountChar = reversedStr[start];
  num = opCount;

  // Reverse Pass
  for (end = 1; end < reversedStr.length; end++) {


    if (reversedStr[end] != maxCountChar) num -= 1;
    if (num < 0) {
      start += 1;
      maxCountChar = reversedStr[start];
      num = opCount;

      for (let idx = start + 1; idx <= end; idx++) {
        if (reversedStr[idx] != maxCountChar) num -= 1;
      };

      if (num < 0) {
        end += num;
        num = 0;
      };
    };
    backwardMaxCount = Math.max(backwardMaxCount, end - start + 1);
  };

  if (num > 0 && backwardMaxCount == end - start) {
    if (backwardMaxCount + num <= str.length)
      backwardMaxCount += num;
  };


  return Math.max(forwardMaxCount, backwardMaxCount);
};

console.log(characterReplacement("ABAB", 2));
console.log(characterReplacement("ABCAXYAZZ", 1));
console.log(characterReplacement("AABABBA", 1));
console.log(characterReplacement("BAAAB", 2));
console.log(characterReplacement("EOEMQLLQTRQDDCOERARHGAAARRBKCCMFTDAQOLOKARBIJBISTGNKBQGKKTALSQNFSABASNOPBMMGDIOETPTDICRBOMBAAHINTFLH", 7));
console.log(characterReplacement("AABA", 0));
