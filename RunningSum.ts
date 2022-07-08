function runningSum(nums: number[]): number[] {

  const runningSumArr = new Array<number>(nums.length);
  runningSumArr[0] = nums[0];
  for (let idx = 1; idx < nums.length; idx++) {
    runningSumArr[idx] = runningSumArr[idx - 1] + nums[idx];
  };

  return runningSumArr;

};

console.log(runningSum([3, 1, 2, 10, 1]));