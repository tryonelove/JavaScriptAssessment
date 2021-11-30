import assert from 'assert';
import { useCached } from '../src/cachingCalculator.js';

describe('Cached results', function () {
  const createResult = (value, isCached) => {
    return { result: value, isCached: isCached };
  };

  describe('Sum', function () {
    const add = (x, y) => x + y;
    const cachedAdd = useCached(add);
    it('1 + 2 = 3 | Calculated', function () {
      assert.deepEqual(cachedAdd(1, 2), createResult(3, false));
    });
    it('1 + 2 = 3 | Cached', function () {
      assert.deepEqual(cachedAdd(1, 2), createResult(3, true));
    });
    it('500 + 500 = 1000 | Calculated', function () {
      assert.deepEqual(cachedAdd(500, 500), createResult(1000, false));
    });
    it('500 + 500 = 1000 | Cached', function () {
      assert.deepEqual(cachedAdd(500, 500), createResult(1000, true));
    });
  });
  describe('Subtraction', function () {
    const subtract = (x, y) => x - y;
    const cachedSubtract = useCached(subtract);
    it('1 - 2 = -1 | Calculated', function () {
      assert.deepEqual(cachedSubtract(1, 2), createResult(-1, false));
    });
    it('1 - 2 = -1 | Cached', function () {
      assert.deepEqual(cachedSubtract(1, 2), createResult(-1, true));
    });
    it('500 - 500 = 0 | Calculated', function () {
      assert.deepEqual(cachedSubtract(500, 500), createResult(0, false));
    });
    it('500 - 500 = 0 | Cached', function () {
      assert.deepEqual(cachedSubtract(500, 500), createResult(0, true));
    });
  });
  describe('Complex number addition', function () {
    const add = (z1, z2) => `${z1.a + z2.a} + ${z1.b + z2.b}i`;
    const cachedAdd = useCached(add);

    it('(3 + 2i) + (1 + 7i) = 4 + 9i | Calculated', function () {
      const firstComplex = { a: 3, b: 2 };
      const secondCoomplex = { a: 1, b: 7 };
      const exprectedResult = '4 + 9i';

      assert.deepStrictEqual(
        cachedAdd(firstComplex, secondCoomplex),
        createResult(exprectedResult, false)
      );
    });
    it('(3 + 2i) + (1 + 7i) = 4 + 9i | Cached', function () {
      const firstComplex = { a: 3, b: 2 };
      const secondCoomplex = { a: 1, b: 7 };
      const exprectedResult = '4 + 9i';

      assert.deepStrictEqual(
        cachedAdd(firstComplex, secondCoomplex),
        createResult(exprectedResult, true)
      );
    });

    it('(1 + 54i) + (2 + 3i) = 3 + 57i | Calculated', function () {
      const firstComplex = { a: 1, b: 54 };
      const secondCoomplex = { a: 2, b: 3 };
      const exprectedResult = '3 + 57i';

      assert.deepStrictEqual(
        cachedAdd(firstComplex, secondCoomplex),
        createResult(exprectedResult, false)
      );
    });

    it('(1 + 54i) + (2 + 3i) = 3 + 57i | Cached', function () {
      const firstComplex = { a: 1, b: 54 };
      const secondCoomplex = { a: 2, b: 3 };
      const exprectedResult = '3 + 57i';

      assert.deepStrictEqual(
        cachedAdd(firstComplex, secondCoomplex),
        createResult(exprectedResult, true)
      );
    });
  });
});
