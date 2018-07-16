const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];

const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments){
  var newArray = [];
  for (let i = 0; i < musicians.length; i++ ) {
   newArray.push(musicians[i] + " plays " + instruments[i])
  }
  return newArray;
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(facts) {
  while (facts >= 0) {
    facts.unshift(facts[i] + "!!!");
  }
  return facts;
}

function iLoveTheBeatles(n) {
  var newArray2 = []
  
}
