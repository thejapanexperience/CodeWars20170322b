var recoverSecret = function(triplets) {
  console.log('triplets: ', triplets)
  let secret = [];
  let letters = {};
  let length = 0;
  let rules = []
  console.log('triplets[0]: ', triplets[0])

  for (let i = 0; i < triplets.length; i++) {
    let triplet = [...triplets[i]];
    let letter = '';
    for (let j = 0; j < triplet.length; j++) {
      letter = triplet[j]
      if (!letters[letter]){
        length += 1;
      }
      letters[letter] = {
        count: 0,
        lettersFollowing: []
      };
    }
  }
  console.log('length: ', length)

  for (var i = 0; i < length; i++) {
    for (let i = 0; i < triplets.length; i++) {
      let triplet = [...triplets[i]];
      let letter = '';
      let letter1 = triplet[0]
      let letter2 = triplet[1]
      let letter3 = triplet[2]
      let array1 = letters[letter1].lettersFollowing;
      let array2 = letters[letter2].lettersFollowing;
      let array3 = letters[letter3].lettersFollowing;
      let count1 = letters[letter1].count
      let count2 = letters[letter2].count
      let count3 = letters[letter3].count
      if (array1.indexOf(letter2) < 0) {
        array1.push(letter2)
      }
      if (array1.indexOf(letter3) < 0) {
        array1.push(letter3)
      }
      if (array2.indexOf(letter3) < 0) {
        array2.push(letter3)
      }
      count1 = array1.length
      count2 = array2.length
      count3 = array3.length
    }
  }
  console.log('letters: ', letters)
}

let triplets = [
  ['t', 'u', 'p'],
  ['w', 'h', 'i'],
  ['t', 's', 'u'],
  ['a', 't', 's'],
  ['h', 'a', 'p'],
  ['t', 'i', 's'],
  ['w', 'h', 's']
];

recoverSecret(triplets)
