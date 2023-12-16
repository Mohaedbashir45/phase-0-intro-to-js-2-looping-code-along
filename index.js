// Function to wrap gifts
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }

  return gifts;
}

wrapGifts(gifts);

// Function to create thank you cards
function writeCards(names, eventName) {
  const thankYouMessages = [];

  for (let i = 0; i < names.length; i++) {
    const message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
    thankYouMessages.push(message);
  }

  return thankYouMessages;
}

// Example call to writeCards function
const thankYouCards = writeCards(["Charlie", "Samip", "Ali"], "birthday");
console.log(thankYouCards);

// Function to count down from a positive integer
function countDown(startingNumber) {
  let count = startingNumber;

  while (count >= 0) {
    console.log(count);
    count--;
  }
}

// Example call to countDown function
countDown(10);
