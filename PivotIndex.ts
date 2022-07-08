function pivotIndex(nums: number[]): number {

  if (nums.length == 1) return 0;

  const forwardSumArr = new Array<number>(nums.length);
  const backwardSumArr = new Array<number>(nums.length);

  forwardSumArr[0] = nums[0];
  backwardSumArr[0] = nums[nums.length - 1];

  for (let idx = 1; idx < nums.length; idx++) {
    forwardSumArr[idx] = forwardSumArr[idx - 1] + nums[idx];
    backwardSumArr[idx] = backwardSumArr[idx - 1] + nums[nums.length - 1 - idx];
  };

  if (backwardSumArr[nums.length - 1 - 1] == 0) return 0;

  for (let idx = 1; idx < nums.length - 1; idx++) {
    if (forwardSumArr[idx - 1] == backwardSumArr[nums.length - 1 - idx - 1]) return idx;
  };

  if (forwardSumArr[nums.length - 1 - 1] == 0) return nums.length - 1;

  return -1;
};

// console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
// console.log(pivotIndex([-1, 1]));
console.log(pivotIndex([-1, -1, 1, 1, 0, 0]));