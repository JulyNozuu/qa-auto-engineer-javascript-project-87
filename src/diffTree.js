import _ from 'lodash';
import diffFormat from './formatters/index.js';

const diff = (obj1, obj2, formate) => {
  const obj1Key = Object.keys(obj1);
  const obj2Key = Object.keys(obj2);
  const result = [];
  for (const key1 of obj1Key) {
    for (const key2 of obj2Key) {
      if (key1 == key2) {
        result.push(key1);
      }
    }
  }
  let result1 = [];
  for (const key1 of obj1Key) {
    if (result.includes(key1) && obj1[key1] == obj2[key1]) { result1.push({key:key1,obj:obj1[key1], action: 'mapped'});}
        else if (result.includes(key1) && obj1[key1] !== obj2[key1]) {  result1.push({ key: key1, obj1: obj1[key1], obj2: obj2[key1], action: 'updated'}); } 
        else if (!result.includes(key1)) {result1.push({ key: key1, obj: obj1[key1],action: 'removed'}) ;}

  }
for (const key2 of obj2Key) {
    if (!result.includes(key2)) { result1.push({key:key2,obj:obj2[key2],action: 'added'});}
  }
  const sortTree = _.sortBy(result1, ['key']);
  const sortTreeFormate = diffFormat(sortTree, formate);
  return sortTreeFormate;
};
export default diff;