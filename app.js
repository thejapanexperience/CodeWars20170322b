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
    if (difArr[i] == difArr[i+1] && difArr[i] < 0){
      type = 'add'
      break;
    }
    if (difArr[i] == difArr[i+1] && difArr[i] > 0){
      type = 'subtract'
      break;
    }
    if ((difArr[i+1] / difArr[i]) == (difArr[i+2] / difArr[i+1])){
      type = 'multiply'
      num
      break;
    }

  }
  console.log('diffArr: ', diffArr)
  console.log('type: ', type);
  return list [0] ;
};

findMissing([1,3,5,9,11]);
