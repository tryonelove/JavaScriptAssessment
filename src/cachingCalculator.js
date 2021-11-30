export function useCached(callback) {
  let cache = {};
  let isCachedResult;

  const createResult = (value, isCached) => {
    return { result: value, isCached: isCached };
  };

  return (firstNumber, secondNumber) => {
    isCachedResult = false;
    const firstKey = JSON.stringify(firstNumber);
    const secondKey = JSON.stringify(secondNumber);

    if (cache[firstKey] == undefined) {
      cache[firstKey] = {};
      cache[firstKey][secondKey] = callback(firstNumber, secondNumber);
      return createResult(cache[firstKey][secondKey], isCachedResult);
    }

    if (cache[firstKey][secondKey] == undefined) {
      cache[firstKey][secondKey] = callback(firstNumber, secondNumber);
      return createResult(cache[firstKey][secondKey], isCachedResult);
    }

    isCachedResult = true;

    return createResult(cache[firstKey][secondKey], isCachedResult);
  };
}
