import { assert } from 'chai';

import {
  findMin,
  findMax,
  findMedian,
  getMaxSubSum,
  longestIncreasingSequence,
} from '../src/arrayProcessingTool.js';

describe('Sub Sum', function () {
  it('[] = 0', function () {
    assert.strictEqual(getMaxSubSum([]), 0);
  });
  it('[-1, 2, 3, -9] = 5', function () {
    assert.strictEqual(getMaxSubSum([-1, 2, 3, -9]), 5);
  });
  it('[2, -1, 2, 3, -9] = 6', function () {
    assert.strictEqual(getMaxSubSum([2, -1, 2, 3, -9]), 6);
  });
  it('[-1, 2, 3, -9, 11] = 11', function () {
    assert.strictEqual(getMaxSubSum([-1, 2, 3, -9, 11]), 11);
  });
  it('[-2, -1, 1, 2] = 100', function () {
    assert.strictEqual(getMaxSubSum([100, -9, 2, -3, 5]), 100);
  });
  it('[1, 2, 3] = 6', function () {
    assert.strictEqual(getMaxSubSum([1, 2, 3]), 6);
  });
  it('[-1, -2, -3] = -1', function () {
    assert.strictEqual(getMaxSubSum([-1, -2, -3]), 0);
  });
  it('[727, 123, 1, -665, 369] = 851', function () {
    assert.strictEqual(getMaxSubSum([727, 123, 1, -665, 369]), 851);
  });
  it('[7, 56, -85553, 5438, -66635529] = 5438', function () {
    assert.strictEqual(getMaxSubSum([7, 56, -85553, 5438, -66635529]), 5438);
  });
  it('[-1, 2, 3, -9] = 5', function () {
    assert.strictEqual(getMaxSubSum([-1, 2, 3, -9]), 5);
  });
});

describe('Search', function () {
  describe('Min', function () {
    it('[] = undefined', function () {
      assert.strictEqual(findMin([]), undefined);
    });
    it('[-1, 2, 3, -9] = -9', function () {
      assert.strictEqual(findMin([-1, 2, 3, -9]), -9);
    });
    it('[2, -1, 2, 3, -9] = -9', function () {
      assert.strictEqual(findMin([2, -1, 2, 3, -9]), -9);
    });
    it('[-1, 2, 3, -9, 11] = -9', function () {
      assert.strictEqual(findMin([-1, 2, 3, -9, 11]), -9);
    });
    it('[-2, -1, 1, 2] = -9', function () {
      assert.strictEqual(findMin([100, -9, 2, -3, 5]), -9);
    });
    it('[1, 2, 3] = 1', function () {
      assert.strictEqual(findMin([1, 2, 3]), 1);
    });
    it('[-1, -2, -3] = -3', function () {
      assert.strictEqual(findMin([-1, -2, -3]), -3);
    });
    it('[727, 123, 1, -665, 369] = -665', function () {
      assert.strictEqual(findMin([727, 123, 1, -665, 369]), -665);
    });
    it('[7, 56, -85553, 5438, -66635529] = -66635529', function () {
      assert.strictEqual(findMin([7, 56, -85553, 5438, -66635529]), -66635529);
    });
  });

  describe('Max', function () {
    it('[] = undefined', function () {
      assert.strictEqual(findMax([]), undefined);
    });
    it('[-1, 2, 3, -9] = 3', function () {
      assert.strictEqual(findMax([-1, 2, 3, -9]), 3);
    });
    it('[2, -1, 2, 3, -9] = 3', function () {
      assert.strictEqual(findMax([2, -1, 2, 3, -9]), 3);
    });
    it('[-1, 2, 3, -9, 11] = 11', function () {
      assert.strictEqual(findMax([-1, 2, 3, -9, 11]), 11);
    });
    it('[-2, -1, 1, 2] = 100', function () {
      assert.strictEqual(findMax([100, -9, 2, -3, 5]), 100);
    });
    it('[1, 2, 3] = 3', function () {
      assert.strictEqual(findMax([1, 2, 3]), 3);
    });
    it('[-1, -2, -3] = -1', function () {
      assert.strictEqual(findMax([-1, -2, -3]), -1);
    });
    it('[727, 123, 1, -665, 369] = -727', function () {
      assert.strictEqual(findMax([727, 123, 1, -665, 369]), 727);
    });
    it('[7, 56, -85553, 5438, -66635529] = -5438', function () {
      assert.strictEqual(findMax([7, 56, -85553, 5438, -66635529]), 5438);
    });
  });

  describe('Median', function () {
    it('[] = 0', function () {
      assert.strictEqual(findMedian([]), 0);
    });
    it('[-1, 2, 3, -9] = 2.5', function () {
      assert.strictEqual(findMedian([-1, 2, 3, -9]), 0.5);
    });
    it('[2, -1, 2, 3, -9] = 2', function () {
      assert.strictEqual(findMedian([2, -1, 2, 3, -9]), 2); // -9 -1 2 2 3 = 2
    });
    it('[-1, 2, 3, -9, 11] = 2', function () {
      assert.strictEqual(findMedian([-1, 2, 3, -9, 11]), 2); // -9 -1 2 3 11 = 2
    });
    it('[-2, -1, 1, 2] = 2', function () {
      assert.strictEqual(findMedian([100, -9, 2, -3, 5]), 2); // -9 -3 2 5 100 = 2
    });
    it('[1, 2, 3] = 2', function () {
      assert.strictEqual(findMedian([1, 2, 3]), 2); // 2
    });
    it('[-1, -2, -3] = -2', function () {
      assert.strictEqual(findMedian([-1, -2, -3]), -2); // -2
    });
    it('[727, 123, 1, -665, 369] = 123', function () {
      assert.strictEqual(findMedian([727, 123, 1, -665, 369]), 123); // -665 1 123 369 727 = 123
    });
    it('[7, 56, -85553, 5438, -66635529] = 7', function () {
      assert.strictEqual(findMedian([7, 56, -85553, 5438, -66635529]), 7); // -66635529 -85553 7 56 5438 = 7
    });
  });

  describe('Longest increasing sequence', function () {
    it('[] = []', function () {
      assert.sameOrderedMembers(longestIncreasingSequence([]), []);
    });
    it('[1, 3, 7, 4, 6, 7, 8, 1, 2, 5, 7, 8, 90, 1] = [1, 2, 5, 7, 8, 90]', function () {
      assert.sameOrderedMembers(
        longestIncreasingSequence([1, 3, 7, 4, 6, 7, 8, 1, 2, 5, 7, 8, 90, 1]),
        [1, 2, 5, 7, 8, 90]
      );
    });
    it('[1, 5, 2, 7, 3] = [2, 7]', function () {
      assert.sameOrderedMembers(
        longestIncreasingSequence([1, 5, 2, 7, 3]),
        [2, 7]
      );
    });
    it('[13, 1, 3, 4, 8, 4] = [1, 3, 4, 8]', function () {
      assert.sameOrderedMembers(
        longestIncreasingSequence([13, 1, 3, 4, 8, 4]),
        [1, 3, 4, 8]
      );
    });
    it('[1, 2, 3, 4, 5, 6, 7] = [1, 2, 3, 4, 5, 6, 7]', function () {
      assert.sameOrderedMembers(
        longestIncreasingSequence([1, 2, 3, 4, 5, 6, 7]),
        [1, 2, 3, 4, 5, 6, 7]
      );
    });
    it('[3, 2, 1] = [1]', function () {
      assert.sameOrderedMembers(longestIncreasingSequence([3, 2, 1]), [1]);
    });
    it('[1, 1, 2, 3] = [1, 2, 3]', function () {
      assert.sameOrderedMembers(
        longestIncreasingSequence([1, 1, 2, 3]),
        [1, 2, 3]
      );
    });
  });
});
