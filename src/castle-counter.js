//
// Castle counter
//

// // DEBUG FUNCTION
// function statusToString (status) {
//   switch (status) {
//     case UP: return 'UP'
//     case DOWN: return 'DOWN'
//     case PLAIN: return 'PLAIN'
//   }
//   return '??'
// }

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
function getDirections (heights) {
  if (!Array.isArray(heights) || !heights.length) {
    return []
  }
  if (heights.length === 1) {
    return PLAIN
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
// Count the number of valleys.
// If the stretch is all plane, then it doesn't
// contain valleys
//
function countPeaks (heights) {
  const directions = getDirections(heights)
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
function countValleys (heights) {
  const directions = getDirections(heights)
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

function countCastles (heights) {
  if (!Array.isArray(heights) || !heights.length) {
    return 0
  }
  let castles = 1 + countPeaks(heights) + countValleys(heights)

  return castles
}

export {
  countPeaks,
  countValleys,
  countCastles
}
