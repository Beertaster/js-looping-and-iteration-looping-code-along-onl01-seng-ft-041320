// Code your solutions in this file
function writeCards(arr, str) {
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray.push("Thank you, ${arr[i]}, for the wonderful ${str} gift!");
  }
  return newArray;
  
}
function countDown(posint) {
  while(posint >= 0) {
    console.log(posint)
    posint--
  }
}