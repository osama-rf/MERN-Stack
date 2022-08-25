function quickSort(nums = [], left = 0, right = nums.length - 1) {

    const center = Math.floor((left + right) / 2)

    while (left <= right){
        while (nums[left] < nums[center]) {
            left ++;
        }
        while (nums[right] > nums[center]){
            right --;
        }

        if (left <= right){
            [nums[left], nums[right]] = [nums[right], nums[left]];
            left ++;
            right --;
        }
    }

    const pivotIndex = left;

    if (left < pivotIndex -1){
        quickSort(nums, left, pivotIndex - 1)
    }

    if (right > pivotIndex) {
        quickSort(nums, pivotIndex, right)
    }

    return nums
}

const nums1 = [11, 8, 14, 3, 6, 2, 7];

console.log(quickSort(nums1));