export function getMaxSubSum(array) {
  if (array.length === 0) {
    return 0;
  }

  let maxSum = 0;

  for (let i = 0; i < array.length; i++) {
    let currentSum = 0;

    for (let j = i; j < array.length; j++) {
      currentSum += array[j];

      if (currentSum > maxSum) {
        maxSum = currentSum;
      }
    }
  }

  return maxSum;
}

export function findMin(array) {
  if (array.length === 0) {
    return undefined;
  }

  return Math.min(...array);
}

export function findMax(array) {
  if (array.length === 0) {
    return undefined;
  }

  return Math.max(...array);
}

export function findMedian(array) {
  if (array.length === 0) {
    return 0;
  }

  let middle = Math.floor(array.length / 2);
  array.sort((a, b) => a - b);

  if (array.length % 2 != 0) {
    return array[middle];
  }

  return (array[middle - 1] + array[middle]) / 2.0;
}

export function longestIncreasingSequence(array) {
  if (array.length === 0) {
    return [];
  }

  let currentLength = 1;
  let maxLength = 1;
  let endIndex = 0;

  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] < array[i + 1]) {
      currentLength += 1;
      maxLength = currentLength > maxLength ? currentLength : maxLength;
      endIndex = i + 1;
    } else {
      currentLength = 1;
      endIndex = i;
    }
  }

  return array.slice(endIndex - maxLength + 1, endIndex + 1);
}
