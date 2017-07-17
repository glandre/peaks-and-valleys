import { countCastles } from './castle-counter'

//
// Executes the command line interface for the program
//
function run () {
  // Display the instructions for the first time
  const instruction = 'Enter the sequence of heights separated by comma... '

  console.log('Welcome to Castle Counter\n')
  console.log(instruction + 'Example:\n>\n1, 2, 4, 5\n>')

  // handle stdin read line events
  process.stdin.pipe(require('split')()).on('data', (line) => {
    try {
      // quit instruction
      if (line.trim().toLowerCase() === 'quit') {
        console.log('\nBye!')
        process.exit(0)
      }

      // read input and parse numbers to int
      const heights = line.split(',').map((h) => {
        if (isNaN(h)) {
          throw Error(h + ' is not a number')
        }
        return parseInt(h.trim(), 10)
      })

      // compute number of castles and print it
      console.log(`\n ==> ${countCastles(heights)} castle(s) can be built in such an area.`)
    } catch (error) {
      console.log('\nI\'m  sorry, I didn\'t understand that...')
      console.log(error.message)
    } finally {
      console.log('\n------\nType \'quit\' to stop the program or...\n\n' + instruction + '\n>')
    }
  })
}

export default run
