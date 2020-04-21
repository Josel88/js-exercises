/*
  Log the Apollo 11 countdown, use the message provided as the last output.
  It starts from 8 till 0!
*/

// write your code here
var apolloCountdownMessage = "all engine running... LIFT-OFF!";
var countdown = 8

while (countdown >= 0) {
  console.log(countdown);
  countdown --;
}

console.log(apolloCountdownMessage);

/* EXPECTED OUTPUT */
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// 0
// all engine running... LIFT-OFF!
