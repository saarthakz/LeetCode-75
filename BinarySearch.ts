function binarySearch(nums: number[], start: number, end: number, target: number): number {

  if (start > end) return -1;
  console.log(start, end);


  let mid = Math.floor((start + end) / 2);

  if (nums[mid] == target) return mid;
  else if (nums[mid] < target) return binarySearch(nums, mid + 1, end, target);
  else if (nums[mid] > target) return binarySearch(nums, start, mid - 1, target);

  return -1;
};

function search(nums: number[], target: number): number {
  return binarySearch(nums, 0, nums.length - 1, target);
};

// console.log(search([-1, 0, 3, 5, 9, 12], 9));
console.log(search([-1, 0, 3, 5, 9, 12], 2));