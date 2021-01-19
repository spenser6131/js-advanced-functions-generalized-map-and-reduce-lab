function map(arr, block) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(block(arr[i]));
  };
  return newArr
}

function reduce(arr, block, start) {
  let agg = !!start ? start : arr[0]
  let i = !!start ? 0 : 1
  for ( ; i < arr.length; i++) {
    agg = block(arr[i], agg);
  };
  return agg;
}
