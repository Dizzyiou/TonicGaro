// requires modified app 12 chunk to work

// checks if a lesson is open
if (window['html5Iframe'] === undefined || window['html5Iframe'] === null || window['p1'] === undefined || window['p1'] === null) {
alert('Please open a lesson.')
} else { // prompts user how many mins they want to farm
alert('Make sure Min Farmer is enabled before running the timer.')
var time = prompt("How many minutes would you like to farm? You will automatically exit your current lesson once all your minutes have been farmed.")

if (time === undefined || time === null) { // cancels timer if prompt is canceled
  console.log('Timer canceled.')
} else { // exits lesson once inputted mins have passed
var milli = time * 60000; // multiplies inputted mins by 60000 to convert to milliseconds
var timer = setInterval(function () { exit(), console.log('Timer ended.') }, milli); 
setInterval(function () { clearInterval(timer); }, milli + 1000); // stops timer interval once finished
}
}