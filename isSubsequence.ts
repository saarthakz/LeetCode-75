function isSubsequence(first: string, second: string): boolean {

  let ptr = 0;

  for (let idx = 0; idx < second.length; idx++) {
    if (second[idx] == first[ptr]) ptr++;
  };

  if (ptr == first.length) return true;
  else return false;
};

console.log(isSubsequence("abc", "acfbeec"));
