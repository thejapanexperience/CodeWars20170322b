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
    if (diffArr[i] == diffArr[i+1] && diffArr[i] < 0){
      type = 'add'
      num = diffArr[i]
    }
    else if (diffArr[i] == diffArr[i+1] && diffArr[i] > 0){
      type = 'subtract'
      num = diffArr[i]
    }
    // if (diffArr.length > 1 && )
    // else if ((list[i+1] / list[i]) == (list[i+2] / list[i+1])){
    //   type = 'multiply'
    //   num = list[i+1] / list[i]
    //   break;
    // }
    // else if ((list[i+1] * list[i]) == (list[i+2] * list[i+1])){
    //   type = 'divide'
    //   num = list[i+1] / list[i]
    //   break;
    // }
  }

for (var i = 1; i < diffArr.length; i++) {
  if (diffArr[i] !== diffArr[0]){
    position = [i + 1]
  }
}

list.splice(position, 0, list[position] + num)
  console.log('diffArr: ', diffArr)
  console.log('type: ', type);
  console.log('num: ', num)
  console.log('position: ', position)
  console.log('list: ', list)
  return list [0] ;
};

findMissing([3,6,9,12,18, 21]);
// findMissing([1,3,5,9,11]);
