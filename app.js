const recoverSecret = function (triplets) {
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
      let letter1 = triplet[0]
      let letter2 = triplet[1]
      let letter3 = triplet[2]
      let array1 = letters[letter1].lettersFollowing;
      let array2 = letters[letter2].lettersFollowing;
      let array3 = letters[letter3].lettersFollowing;
      if (array1.indexOf(letter2) < 0) {
        array1.push(letter2)
      }
      if (array1.indexOf(letter3) < 0) {
        array1.push(letter3)
      }
      if (array2.indexOf(letter3) < 0) {
        array2.push(letter3)
      }
    }
  }
  for (var i = 0; i < length; i++) {
    for (let i = 0; i < triplets.length; i++) {
      let triplet = [...triplets[i]];
      let letter1 = triplet[0]
      let letter2 = triplet[1]
      let letter3 = triplet[2]
      let array1 = letters[letter1].lettersFollowing;
      let array2 = letters[letter2].lettersFollowing;
      let array3 = letters[letter3].lettersFollowing;

      for (let k = 0; k < array2.length; k++) {
        if (array1.indexOf(array2[k]) < 0){
          array1.push(array2[k])
        }
      }
      for (let k = 0; k < array3.length; k++) {
        if (array1.indexOf(array3[k]) < 0){
          array1.push(array3[k])
        }
      }
      for (let k = 0; k < array3.length; k++) {
        if (array2.indexOf(array3[k]) < 0){
          array2.push(array3[k])
        }
      }
    }
  }
  console.log('letters: ', letters)
}

const triplets = [
  ['t', 'u', 'p'],
  ['w', 'h', 'i'],
  ['t', 's', 'u'],
  ['a', 't', 's'],
  ['h', 'a', 'p'],
  ['t', 'i', 's'],
  ['w', 'h', 's']
];

recoverSecret(triplets)
