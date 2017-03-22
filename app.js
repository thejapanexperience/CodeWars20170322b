var findMissing = function (list) {
  console.log('list: ', list);
  let type = {
    1: 'add',
    2: 'subtract',
    3: 'multiply',
    4: 'divide'
  }
  if (list[0] - list[1] === list[1] - list[2] && list[0 - list[1] > 0 ] ){
    type = 'add'
  }

  console.log('type: ', type)
  return list [0] ;
}

findMissing([1,3,5,9,11])
