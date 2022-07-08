function isIsomorphic(first: string, second: string): boolean {

  if (first.length != second.length) return false;

  const strMap = new Map();
  let flag = true;

  for (let idx = 0; idx < first.length; idx++) {
    if (strMap.has(first[idx]) && strMap.get(first[idx]) != second[idx]) {
      flag = false;
      break;
    };

    if (!strMap.has(first[idx])) strMap.set(first[idx], second[idx]);
  };

  strMap.clear();

  for (let idx = 0; idx < first.length; idx++) {
    if (strMap.has(second[idx]) && strMap.get(second[idx]) != first[idx]) {
      flag = false;
      break;
    };

    if (!strMap.has(second[idx])) strMap.set(second[idx], first[idx]);
  };

  return flag;
};


console.log(isIsomorphic("egg", "fos"));