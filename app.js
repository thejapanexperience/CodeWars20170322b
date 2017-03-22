var findMissing = function (list) {
  console.log('list: ', list);
  let type = '';
  let diffArr = []
  let diff = 0;
  let num = 0;
  let position = 0;

  for (var i = 0; i < list.length-1; i++) {
    diff=list[i] - list[i+1]
    diffArr.push(diff)
  }

  for (var i = 0; i < diffArr.length; i++) {
    if (diffArr[i] == diffArr[i+1]){
      type = 'add'
      num = diffArr[i]
      console.log('num: ', num)
    } else if (diffArr.length === 2){
      if (diffArr[0]> diffArr[1]){
        num = diffArr[1]
      } else {
        num = diffArr[0]
      }
    }
  }
  //
  // for (var i = 0; i < diffArr.length; i++) {
  //   if (diffArr[i] == diffArr[i+1] && diffArr[i] < 0){
  //     type = 'add'
  //     num = diffArr[i]
  //     console.log('num: ', num)
  //   }
  //   else if (diffArr[i] == diffArr[i+1] && diffArr[i] > 0){
  //     type = 'subtract'
  //     num = diffArr[i]
  //     console.log('num: ', num)
  //   }
  // }

for (var i = 1; i < diffArr.length; i++) {
  if ( diffArr[i] !== diffArr[0]){
    position = [i + 1]
    list.splice(position, 0, list[position] + num)
  }
  // else if (type === 'add' && diffArr[i] !== diffArr[0]){
  //   position = [i + 1]
  //   list.splice(position, 0, list[position] - num)
  // }
}
  //
  // console.log('diffArr: ', diffArr)
  // console.log('type: ', type);
  console.log('num: ', num)
  console.log('position: ', position)
  // console.log('list: ', list)
  // console.log('list[position]: ', list[position])
  return list [position] ;
};

findMissing([3,6,9,12,18, 21]);
// findMissing([1,3,5,9,11]);
