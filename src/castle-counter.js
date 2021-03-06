//
// Castle counter
//

// DIRECTIONS:
const UP = 1
const DOWN = -1
const PLAIN = 0

//
// Computes an array of directions
// based on an array of heights
// Example:
// - Input: [1, 2, 1]
// - Output: [UP, DOWN]
//
// The algorithm is linear (amortized) since iterates through
// the array of heights only once.
// The directions array could be statically instaced
// with heights.length - 1 position, which would assure
// push method O(1) amortized, so it's good enough.
//
// Reference:
// https://stackoverflow.com/questions/11514308/big-o-of-javascript-arrays
//
function getDirections (heights) {
  if (!Array.isArray(heights) || !heights.length) {
    return []
  }
  if (heights.length === 1) {
    return [PLAIN]
  }
  let directions = []
  for (let i = 1; i < heights.length; i++) {
    const current = heights[i]
    const previous = heights[i - 1]
    if (current > previous) {
      directions.push(UP)
    } else if (current < previous) {
      directions.push(DOWN)
    } else {
      directions.push(PLAIN)
    }
  }
  return directions
}

//
// Count the number of peaks.
// If the stretch is all plane, then it doesn't
// contain peaks.
//
function countPeaks (directions) {
  if (!directions.length) {
    return 0
  }
  let peaks = 0
  let status = directions[0]
  for (let i = 0; i < directions.length; i++) {
    const nextStatus = directions[i]
    if (status === UP) {
      if (nextStatus === DOWN) {
        peaks++
        status = DOWN
      }
    } else if (nextStatus === UP) {
      status = nextStatus
    }
  }
  return peaks
}

//
// Count the number of valleys.
// If the stretch is all plane, then it doesn't
// contain valleys
//
function countValleys (directions) {
  if (!directions.length) {
    return 0
  }
  let valleys = 0
  let status = directions[0]
  for (let i = 0; i < directions.length; i++) {
    const nextStatus = directions[i]
    if (status === DOWN) {
      if (nextStatus === UP) {
        valleys++
        status = UP
      }
    } else if (nextStatus === DOWN) {
      status = nextStatus
    }
  }
  return valleys
}

//
// Computes the number of peaks + number of valleys + 1.
// The assumption is that we can always build a castle in the first
// position of the array provided that it is not empty.
// Since a valley is preceded by at least one DOWN,
// and a peak is preceded by at least one UP,
// there will be no peak or valley starting from the first
// position, and, because of that, it's safe to add one to the sum
// of peaks and valleys. This one will also handle plain areas and
// array with only one number.
//
// The algorithm is linear amortized ( O(n) ), because countPeaks and
// countValleys are linear and are run only once each.
//
function countCastles (heights) {
  if (!Array.isArray(heights) || !heights.length) {
    return 0
  }
  const directions = getDirections(heights)
  return countPeaks(directions) + countValleys(directions) + 1
}

export {
  getDirections,
  countPeaks,
  countValleys,
  countCastles
}
