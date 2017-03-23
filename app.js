var recoverSecret = function(triplets) {
  console.log('triplets: ', triplets)
  let secret = [];
  let letters = {};
  let length = 0;
  let rules = []
  console.log('triplets[0]: ', triplets[0])

  for (let i = 0; i < triplets.length; i++) {
    let triplet = [...triplets[i]]
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

  for (let h = 0; h < length; h++) {
    for (let i = 0; i < triplets.length; i++) {
      let triplet = [triplets[i]]
      console.log('triplet[0][0]: ', triplet[0][0])
      console.log('letters[triplet[0]]: ', letters[triplet[0]])
      console.log('letters: ', letters)
        // letters[triplet[0][0]].push('hello')
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
