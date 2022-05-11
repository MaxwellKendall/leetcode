// 0 1 1 2 3 5 8 13 21 ...
// const seq = [0, 1, 1, 2, 3, 5, 8, 13, 21];
const seq = [0, 1];
// the sum of two numbers for it

// param: int -- index in the sequence
// return: value for given index
// NOTE: index is 1 based not 0 based

const fn = (input) => {
  // all indexes are zero based, input is not
  const maxIndex = seq.length - 1;
  const desiredIndex = input - 1;
  if (desiredIndex > maxIndex) {
      const needed = desiredIndex - maxIndex;
      for (var i = 1; i <= needed; i++) {
        // build out the array until we get to the desired index
        const nextIndex = maxIndex + i;
        seq[nextIndex] = seq[nextIndex - 2] + seq[nextIndex - 1];
      }
  }
  return seq[desiredIndex];
}

const inputOutput = [
    [1, 0],
    [8, 13],
    [9, 21]
]

inputOutput.forEach(([input, output]) => {
    const result = fn(input);
    const test = result === output;
    if (test) {
        console.log(`passed: input ${input} gives ${result}`)
    } else {
        console.log(`failed: expected ${output}, got ${result}`);
    }
});