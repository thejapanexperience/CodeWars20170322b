var findMissing = function (list) {
  let diffArr = []
  let diff = 0;
  let num = 0;
  let final = 0;

  for (var i = 0; i < list.length-1; i++) {
    diff=list[i] - list[i+1]
    diffArr.push(diff)
  }

  for (let i = 0; i < diffArr.length; i++) {
      if (Math.abs(diffArr[0]) > Math.abs(diffArr[1])){
        num = diffArr[1]
      } else {
        num = diffArr[0]
      }
  }

if (diffArr[0] < 0){
  for (let i = 0; i < list.length; i++) {
    if (list[i] + Math.abs(num) !== list[i+1]){
      final = list[i] + Math.abs(num)
      return final;
    }
  }
}

if (diffArr[0] > 0){
  for (let i = 0; i < list.length; i++) {
    if (list[i] - Math.abs(num) !== list[i+1]){
      final = list[i] - Math.abs(num)
      return final;
    }
  }
}

};

findMissing([3,6,9,12,18, 21]);
// findMissing([1,3,5,9,11]);
