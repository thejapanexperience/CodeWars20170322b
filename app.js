var findMissing = function (list) {
  console.log('list: ', list);
  let type = '';
  let diffArr = []
  let diff = 0;
  let num = 0;

  for (var i = 0; i < list.length-1; i++) {
    diff=list[i] - list[i+1]
    diffArr.push(diff)
  }

  for (var i = 0; i < diffArr.length; i++) {
    if (diffArr[i] == diffArr[i+1] && diffArr[i] < 0){
      type = 'add'
      num = diffArr[i]
      break;
    }
    if (diffArr[i] == diffArr[i+1] && diffArr[i] > 0){
      type = 'subtract'
      num = diffArr[i]
      break;
    }
    if ((list[i+1] / list[i]) == (list[i+2] / list[i+1])){
      type = 'multiply'
      num = list[i+1] / list[i]
      break;
    }

  }
  console.log('diffArr: ', diffArr)
  console.log('type: ', type);
  console.log('num: ', num)
  return list [0] ;
};

findMissing([1,3,5,9,11]);
