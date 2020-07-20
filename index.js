// Code your solutions in this file
function writeCards(arr, str) {
  for (let i = 0; i < arr.length; i++) {
    new("Thank you, ${arr[i]}, for the wonderful ${str} gift!");
  }
  
}
function countDown(posint) {
  while(posint >= 0) {
    console.log(posint)
    posint--
  }
}