export function useCached(callback) {
  let cache = {};
  let isCachedResult = false;

  const createResult = (value, isCached) => {
    return { result: value, isCached: isCached };
  };

  return (firstNumber, secondNumber) => {
    isCachedResult = false;
    if (cache[firstNumber] == undefined) {
      cache[firstNumber] = {};
      cache[firstNumber][secondNumber] = callback(firstNumber, secondNumber);
      return createResult(cache[firstNumber][secondNumber], isCachedResult);
    }

    if (cache[firstNumber][secondNumber] == undefined) {
      cache[firstNumber][secondNumber] = callback(firstNumber, secondNumber);
      return createResult(cache[firstNumber][secondNumber], isCachedResult);
    }

    isCachedResult = true;

    return createResult(cache[firstNumber][secondNumber], isCachedResult);
  };
}
