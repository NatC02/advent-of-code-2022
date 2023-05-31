const fs = require('fs');

const fileContents = fs.readFileSync('input.txt', 'utf-8');

// Split the file contents into an array of lines
const lines = fileContents.split('\n');

let item_number = 0;
let sum = 0;

// Global variables for sums
let item_global_sum_one = 0;
let item_global_sum_two = 0;
let item_global_sum_three = 0;
let item_global_sum_four = 0;
let item_global_sum_five = 0;

// Iterate over each line
for (const line of lines) {
  // Check if the line is empty
  if (line.trim() === '') {
    // Add the sum to the appropriate global variable based on item_number
    if (item_number === 1) {
      item_global_sum_one = Math.max(item_global_sum_one, sum);
    } else if (item_number === 2) {
      item_global_sum_two = Math.max(item_global_sum_two, sum);
    } else if (item_number === 3) {
      item_global_sum_three = Math.max(item_global_sum_three, sum);
    } else if (item_number === 4) {
      item_global_sum_four = Math.max(item_global_sum_four, sum);
    } else if (item_number === 5) {
      item_global_sum_five = Math.max(item_global_sum_five, sum);
    }

    // Reset the sum
    sum = 0;

    // Check if item_number has reached the maximum value (5)
    if (item_number >= 5) {
      break; // Exit the loop if the maximum value is reached
    }

    // Increment item_number
    item_number++;
  } else {
    // Parse the number from the line and add it to the sum
    const number = parseInt(line, 10);
    sum += number;
  }
}

// Find the maximum sum among the global variables
const maxSum = Math.max(item_global_sum_one, item_global_sum_two, item_global_sum_three, item_global_sum_four, item_global_sum_five);

// Calculate the sum of the top three highest sums
const topThreeSums = [item_global_sum_one, item_global_sum_two, item_global_sum_three, item_global_sum_four, item_global_sum_five];
topThreeSums.sort((a, b) => b - a);
const top_three_total = topThreeSums.slice(0, 3).reduce((acc, cur) => acc + cur, 0);

console.log('item_number:', item_number);
console.log('Max Sum:', maxSum);
console.log('Top Three Total:', top_three_total);