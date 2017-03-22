var findMissing = function (list) {
  console.log('list: ', list);
  let type = '';
  let diffArr = []
  let diff=0;

  if (list[0] - list[1] === list[1] - list[2] && list[0] - list[1] < 0  ){
    type = 'add';
  }
  for (var i = 0; i < list.length-1; i++) {
    diff=list[i] - list[i+1]
    diffArr.push(diff)
  }
  console.log('diffArr: ', diffArr)
  console.log('type: ', type);
  return list [0] ;
};

findMissing([1,3,5,9,11]);
