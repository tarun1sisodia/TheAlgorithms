
function binarySearch(arr, target) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (arr[mid] === target) {
            return mid; // index mil gaya
        }
        if (arr[mid] < target) {
            start = mid + 1; // right half
        } else {
            end = mid - 1; // left half
        }
    }
    return -1; // nahi mila
}

// Example (sorted array)
let rollNumbers = [101, 103, 104, 107, 110, 115];

console.log(binarySearch(rollNumbers, 107)); // 3
console.log(binarySearch(rollNumbers, 102)); // -1
