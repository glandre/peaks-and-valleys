/* global describe, it */
import assert from 'assert'
import { countPeaks } from '../../src/castle-counter'

describe('countPeaks', () => {
  it('Should return 2 if array is [2, 2, 2, 1, 2, 2, 3, 1, 7, 2]', () => {
    assert.equal(
      countPeaks([2, 2, 2, 1, 2, 2, 3, 1, 7, 2]),
      2
    )
  })
  // some edge cases:
  it('Should return 0 if array is null', () => {
    assert.equal(
      countPeaks(null),
      0
    )
  })
  it('Should return 0 if array is empty', () => {
    assert.equal(
      countPeaks([]),
      0
    )
  })
  it('Should return 0 if array is contains one element', () => {
    assert.equal(
      countPeaks([1]),
      0
    )
  })
  it('Should return 1 if array is [1, 2, 1]', () => {
    assert.equal(
      countPeaks([1, 2, 1]),
      1
    )
  })
})
