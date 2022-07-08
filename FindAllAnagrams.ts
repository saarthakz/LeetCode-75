function findAnagrams(first: string, second: string): number[] {

  function areMapsEqual(firstMap: Map<string, number>, secondMap: Map<string, number>) {

    for (let pair of firstMap.entries()) {
      if (!secondMap.has(pair[0]) || pair[1] != secondMap.get(pair[0])) return false;
    };
    return true;
  };

  const indices = new Array<number>();
  const secondMap = new Map<string, number>();
  const firstMap = new Map<string, number>();

  for (let idx = 0; idx < second.length; idx++) {

    if (firstMap.has(first[idx])) {
      let val = Number(firstMap.get(first[idx]));
      firstMap.set(first[idx], val + 1);
    }
    else firstMap.set(first[idx], 1);

    if (secondMap.has(second[idx])) {
      let val = Number(secondMap.get(second[idx]));
      secondMap.set(second[idx], val + 1);
    }
    else secondMap.set(second[idx], 1);
  };

  for (let idx = 0; idx < first.length - second.length + 1; idx++) {

    if (areMapsEqual(firstMap, secondMap)) indices.push(idx);

    let val = firstMap.get(first[idx + second.length]);

    // Adding the next element into the window map
    if (val != undefined) {
      firstMap.set(first[idx + second.length], val + 1);
    } else firstMap.set(first[idx + second.length], 1);

    // Removing the current element from the window map
    val = firstMap.get(first[idx]);

    if (val != undefined) {
      if (val == 1) firstMap.delete(first[idx]);
      else firstMap.set(first[idx], val - 1);
    };
  };

  console.log(indices);

  return indices;

};


findAnagrams("cbaebabacd", "abc");
// findAnagrams("abab", "ab");