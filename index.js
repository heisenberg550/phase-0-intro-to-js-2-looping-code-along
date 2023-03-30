// Code your solutions in this file
function writeCards(namesArray, event) {
  let messagesArray = [];

  for (let i = 0; i < namesArray.length; i++) {
    let message = `Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`;
    messagesArray.push(message);
  }

  return messagesArray;
}

const countDown = function (num) {
  while (num >= 0) {
    console.log(num);
    num--;
  }
};
