function sortedFrequency(arr, num) {
    // Perform binary search to find the first and last occurrences of num
    let firstIdx = findFirst(arr, num);
    let lastIdx = findLast(arr, num);

    if (firstIdx === -1 || lastIdx === -1) {
        return -1;
    }

    return lastIdx - firstIdx + 1;
}

// Helper function to find the first occurrence of num using binary search
function findFirst(arr, num) {
    let left = 0;
    let right = arr.length - 1;
    let firstIdx = -1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === num) {
            firstIdx = mid;
            right = mid - 1;
        } else if (arr[mid] < num) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return firstIdx;
}

// Helper function to find the last occurrence of num using binary search
function findLast(arr, num) {
    let left = 0;
    let right = arr.length - 1;
    let lastIdx = -1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === num) {
            lastIdx = mid;
            left = mid + 1; // Continue searching in the right half
        } else if (arr[mid] < num) {
            left = mid + 1; // Continue searching in the right half
        } else {
            right = mid - 1; // Continue searching in the left half
        }
    }

    return lastIdx;
}

module.exports = sortedFrequency;
