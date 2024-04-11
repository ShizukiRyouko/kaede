function isSubset(set,subset){
  return subset.filter(item => !set.includes(item)).length == 0
}
function isOverlap(set,subset){
  return subset.filter(item => set.includes(item)).length > 1
}
function getOutsider(set,subset){
  return subset.filter(item => !set.includes(item))
}
function getAttributeArray(set,attr) {
  // input [{id: "aaa", attr: "aasd"},{id: "aad", attr: "adaa"}]
  // output ["aaa", "aaad"]
  return set.map(item => item[attr]); 
}